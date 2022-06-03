









import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native"

//Criando a função e recebendo por props o tiutlo dataLancamento e imagem do jogo
export default function style({ titulo, dataLancamento, imagem}) {
    return (
    <TouchableOpacity>
        <Image 
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />

        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.dataLancamento}>{dataLancamento}</Text>
    </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
    
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeigth: "bold",
        textAlign: "center",
    },
    dataLancamento: {
        color: "green",
        fontSize: 12,
        marginLeft: 245,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width: 300,
        height: 200,
        borderRadius: 10,
        margin: 5
    },


});