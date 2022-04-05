import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection"

export const InsumosContext = createContext([])


function InsumoProvider({ children }) {
  const [insumos, setInsumos] = useState([])

  useEffect(() => {
    async function loadInsumos() {
      await firebase.firestore().collection('insumos')
      .onSnapshot((doc) => {
        let arrayInsumos = []

        doc.forEach((item)=>{
          arrayInsumos.push({
            id: item.id,
            codigoInsumo: item.data().codigoInsumo,
            descricaoInsumo: item.data().descricaoInsumo,
            unidadeInsumo: item.data().unidadeInsumo,
            precoBaseInsumo: item.data().precoBaseInsumo,
            categoriaInsumo: item.data().categoriaInsumo,
            fornecedor: item.data().fornecedor
          })
        })

        setInsumos(arrayInsumos)
      })
    }

    loadInsumos()
  }, [])

  return (
    <InsumosContext.Provider value={insumos}>
      {children}
    </InsumosContext.Provider>
  )

}

export default InsumoProvider
