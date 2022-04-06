import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection"

export const FornecedoresContext = createContext([])


function FornecedorProvider({ children }) {
  const [fornecedores, setFornecedores] = useState([])

  useEffect(() => {
    async function loadFornecedores() {
      await firebase.firestore().collection('fornecedores')
      .onSnapshot((doc) => {
        let arrayFornecedores = []

        doc.forEach((item)=>{
          arrayFornecedores.push({
            id: item.id,
            fornecedor: item.data().fornecedor,
            categoriaFornecedor: item.data().categoriaFornecedor,
            cpnjFornecedor: item.data().cpnjFornecedor,
            telefoneFornecedor: item.data().telefoneFornecedor,
            emailFornecedor: item.data().emailFornecedor,
            enderecoFornecedor: item.data().enderecoFornecedor
          })
        })

        setFornecedores(arrayFornecedores)
      })
    }

    loadFornecedores()
  }, [])

  return (
    <FornecedoresContext.Provider value={fornecedores}>
      {children}
    </FornecedoresContext.Provider>
  )

}

export default FornecedorProvider
