import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
// import {validateEmail} from '../utils/validations';
// import firebase from '../utils/firebase';

const LoginForm = ({changeForm}) => {
  const [formData, setformData] = useState(defaultValue());
  const [error, setError] = useState({});

  // const setLogin = () => {
  //   let errors = {};
  //   if (!formData.email || !formData.password) {
  //     if (!formData.email) {
  //       errors.email = true;
  //     }
  //     if (!formData.pasword) {
  //       errors.password = true;
  //     }
  //   } else if (!validateEmail(formData.email)) {
  //     errors.email = true;
  //   } else {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(formData.email, formData.password)
  //       .catch(() => {
  //         setError({
  //           email: true,
  //           password: true,
  //         });
  //       });
  //   }

  //   setError(errors);
  // };

  // const login = (e, type) => {
  //   setformData({...formData, [type]: e.nativeEvent.text});
  // };
  return (
    <>
      <TextInput
        placeholder="Correo Electronico"
        placeholderTextColor="#969696"
        style={[styles.input, error.email && styles.error]}
        // onChange={(e) => {
        //   login(e, 'email');
        // }}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        style={[styles.input, error.pasword && styles.error]}
        secureTextEntry={true}
        // onChange={(e) => {
        //   login(e, 'password');
        // }}
      />
      <TouchableOpacity>
        {/* onPress={setLogin} */}
        <Text style={styles.btnText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      {/* onPress={changeForm} */}
      <TouchableOpacity style={styles.btnRegister}>
        <Text style={[styles.btnText, {color:'#000'}]}>Registrate</Text>
      </TouchableOpacity>
    </>
  );
};

function defaultValue() {
  return {
    email: '',
    password: '',
  };
}

export default LoginForm;

const styles = StyleSheet.create({
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  input: {
    height: 50,
    width: '80%',
    marginBottom: 15,
    fontSize: 18,
    borderRadius: 50,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#1e3040',
    color: '#fff',
    backgroundColor: '#1e3040',
  },
  btnRegister: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  error: {
    borderColor: '#940c0c',
  },
});
