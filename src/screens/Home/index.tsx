import { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import { Participant } from '@components/Participant/';

export default function Home() {
  const [participants, setParticipants] = useState(['João'])

  function handleParticipantAdd(){
    if(participants.includes("Rodrigo")){
      return Alert.alert("Participante Existente","Participante Já existe.")
    }

    setParticipants(prevState => [...prevState, 'Ana'])
  }

  function handleParticipantRemove(name:string){
    Alert.alert("Remover",`Remover o participante ${name}?`,[
      {
        text:'Sim',
        onPress: () => Alert.alert("Removido com sucesso!!")
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])
    console.log(`Voce removeu o nome  ${name}`)
  }

  return (
    <View  style={styles.container}>
      <Text style={styles.eventName} >
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de novembro  de 2022.
      </Text>
      <View style={styles.form}>
        <TextInput style={styles.input}
        placeholder='Nome do  participante'
        placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({item})=>(
          <Participant
          name={item}
          onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={ListEmptyComponent}
      />

    </View>
  );
}

const ListEmptyComponent = () =>(
  <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
  </Text>
)