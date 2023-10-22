import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {
  const participants = ['Rodrigo', 'Diego','Vinicius']
  function handleParticipantAdd(){
    console.log("Voce clicou no botão de adicionar")
  }

  function handleParticipantRemove(name:string){
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
      
      
      <Participant name='Outro nome' onRemove={() => handleParticipantRemove("Outro nome")}/>
    </View>
  );
}