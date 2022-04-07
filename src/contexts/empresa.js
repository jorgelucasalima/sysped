import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";


export const EmpresaContext = createContext([])

function EmpresaProvider({ children }) {
  const [empresa, setEmpresa] = useState([]);
  console.log(empresa)

  useEffect(() => {
    async function loadEmpresa() {
      await firebase.firestore().collection('empresa')
      .onSnapshot((doc) => {
        let arrayEmpresa = []

        doc.forEach((item) => {
          arrayEmpresa.push({
            id: item.id,
            empresa: item.data().empresa,
            cnpjEmpresa: item.data().cnpjEmpresa,
            contatoEmpresa: item.data().contatoEmpresa,
            emailEmpresa: item.data().emailEmpresa
          })
        })

        setEmpresa(arrayEmpresa)
      })
    }

    loadEmpresa()
  }, [])

  return (
    <EmpresaContext.Provider value={empresa}>
      {children}
    </EmpresaContext.Provider>
  )
}

export default EmpresaProvider