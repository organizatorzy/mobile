import React from "react";
import { Button, View, Text, StyleSheet, ImageBackground } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { useEffect } from "react";

import { firebaseConfig, db } from "../firebase/config";

import { collection, getDocs } from "firebase/firestore"; 

export const GminaView = () => {

    useEffect(() => {
        loadGminy();
      }, []);
    
    async function loadGminy() {
      const querySnapshot = await getDocs(collection(db, "gmina"));
      let gminy: any  = []
      querySnapshot.forEach((doc) => {
        gminy.push(doc.data())
      })
      setGminy(gminy);
    }

    const [selected, setSelected] = React.useState("");

    const [regions,setRegions] = React.useState([  { value: "Bartek", disabled: false }]);

    const [gminy,setGminy] = React.useState([{ value: "Gej", disabled: false }]);

  useEffect(()=>{
  },[]);


  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  return (
    <View style={styles.container}>
        <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={regions}
        save="value" />

        <SelectList
        setSelected={(val: any) => setSelected(val)}
        data={gminy}
        save="value" />
    </View>
  );

};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      minWidth:"50%",
    },
  });