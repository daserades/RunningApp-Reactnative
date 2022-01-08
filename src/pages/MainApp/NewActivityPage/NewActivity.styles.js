import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        buttonContainer: {
            flex: 1,
            position: 'absolute',
            alignSelf: 'center',
            bottom: 10,

        },

        dataContainer: {
            flex: 1,
            flexDirection: 'row'
        },
        data: {
            flex: 1,
            //backgroundColor: '#505050',
            alignItems:'center',
            justifyContent:'center',
          
        },
        timerContainer: {
            flexDirection: 'row',
        },
        Text: {
            
            fontSize: 20,
            color: 'black',
            
        },
       

    }
)