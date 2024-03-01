import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../Component/Spinner";

export default function User() {
  function formatHeight(height){
    let altura = height.toString().split('')
    let altCopy = [...altura]
    altCopy.splice(1,0,'.')
    return altCopy.join().replaceAll(',', '')
  }

  function imcCalc(peso, altura){
    return peso / (altura * altura)
  }
  let [user, setUser] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id == 0 ? 1 : id }`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUser((u) => [data]);
        }, 2000);
      });
  }, [id]);
  // const users = [
  //   "Mario",
  //   "Emme",
  //   "Solar",
  //   "Jeongyeon",
  //   "Kelly",
  //   "Fabiana",
  //   "Caio",
  //   "Fanny",
  //   "Heloisa",
  //   "Renata",
  // ];
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Usuario</h3>
      <div className="main-content">
        <div>
          {user.length > 0 ? (
            user.map((item) => (
              <div key={item.id}>
                <div style={{ textAlign: "center" }}>
                  <img width={150} src={item.image} alt={item.firstName}/>
                </div>
                <p>
                  <strong>nome completo :</strong> {item.firstName}{" "}
                  {item.lastName}
                </p>
                <p>
                  <strong>e-mail :</strong> {item.email}
                </p>
                <p>
                  <strong>telefone :</strong> {item.phone}
                </p>
                <p>
                  <strong>peso :</strong> {item.weight}
                </p>
                <p>
                  <strong>altura :</strong> {item.height}
                </p>
                <p>
                  <strong>IMC :</strong> {imcCalc(item.weight,formatHeight(item.height)).toFixed(1)}
                </p>
                <p>
                  <strong>tipo sanguíneo  :</strong> {item.bloodGroup}
                </p>

              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
}
