import React, { useEffect } from 'react';

import { useState } from 'react';

import { ScrollView,Pressable, StyleSheet, Text,View } from 'react-native'



interface ChoiceProps {
    active?: string;
    data: Array<any>;
    getActive   : Function;
    style :any;
}



export const Choice: React.FC<ChoiceProps> = ({data,active,getActive,style}) => {

    const [toggle,setToggle] = useState(true)

    console.log(data)

    let items : any =data.map(item=>{
        return <Pressable key={item.key} onPress={()=>{getActive(item)}} style={styles.item}><Text style={styles.itemText}>{item.value}</Text></Pressable>
    })




return(
    <View style={[style,styles.container]}>
    <Pressable onPress={()=>{setToggle(!toggle);}} style={styles.slider}  >
         <Text style={styles.text}> {active != undefined ?  active : "Select"}</Text>
         <Text style={styles.drop}>▼</Text>
    </Pressable>
    {
    toggle ? "" : (
    <ScrollView contentContainerStyle={{justifyContent:"center"}}  style={[styles.content,{maxHeight: items.length * 30 *1.5 } ]}>
       {items}
    </ScrollView>
    )
  
    }
      </View>
)
}

const styles = StyleSheet.create({
    item:{
        alignContent:"center",
        justifyContent:"center",
        height:30,
        margin:3,
        borderRadius:10,
        backgroundColor:"#ccc",
        
    },
    itemText:{
        fontSize:15,
        textAlign:"center"
    },

    container:{
  
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        

    },
    content:{
        textAlign:"center",
        alignContent:"center",
        borderRadius: 20,
        borderColor:"black",
        marginTop:10,
        padding:10, 
        borderWidth:2,
        overflow:"scroll",
        gap:20,
        backgroundColor:"white"
    },
    slider: {
        flexDirection:"row",
        padding:10,
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        borderRadius: 20,
        borderColor:"black",
        backgroundColor:"white",
        borderWidth:2,
        width:260,
    },
    text:{
        
        fontSize:15, 
        marginLeft:"auto",
    },
    drop:{
        marginLeft:"auto",
        backgroundColor:"white"
    },
    chooser: {
        textAlign:"center",
        justifyContent:"center",
        alignContent:"center",
        color: 'white',
        fontSize: 16,
        backgroundColor:"white"
        
    },

  });