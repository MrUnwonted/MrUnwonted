#Start___________________________________________________________________________________________________________________________________
in cmd{npm install -g react-native-cli

react-native init #project-name(no special char)}

in terminal{react-native start

react-native run-android/ios}

for new usb device adb devices
adb reverse tcp:8081 tcp:8081




1____________________________________________________________________________________________________________________________________
import React,{Component} from "react"
import {
  View,
  StyleSheet
}from 'react-native'

export default class App extends Component{
      render(){
        return(
          <View style={styles.container}>
            
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcba03'
  }
})
2____________________________________________________________________________________________________________________________________
import React,{Component} from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text
}from 'react-native'

export default class App extends Component{
      render(){
        return(
          <View style={styles.container}>
            <ImageBackground source= {require('./assets/bg.jpg')}
              style={styles.backgroundImage}>          
               <Image source= {require('./assets/logo-og.png')}
               style={styles.logo}>
               </Image>
               <Text style={styles.textView}>Welcome to My World , "Hello"</Text>
            </ImageBackground>
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcba03'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height:100,
    width:100,
    marginBottom: 20
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25
  }
})
3______________Full Login Page_____________________________________________________________________________________________________________________
import React,{Component} from "react"
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native'

export default class App extends Component{
      render(){
        return(
          <View style={styles.container}>
            <ImageBackground source= {require('./assets/bg.jpg')}
              style={styles.backgroundImage}>          
               <Image source= {require('./assets/logo-og.png')}
               style={styles.logo}>
               </Image>
               <Text style={styles.textView}>Welcome to My World , "Hello"</Text>
                <TextInput style={styles.inputView}
                  placeholder= 'Username'
                  placeholderTextColor= 'yellow'
                  maxLength={12}>
                </TextInput>
                <TextInput style={styles.inputView}
                placeholder= "Password"
                placeholderTextColor= "yellow"
                secureTextEntry={true}>
                </TextInput>
                <TouchableHighlight style={styles.buttonView}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </ImageBackground>
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container : {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcba03'
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height:100,
    width:100,
    marginBottom: 20
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25
  },
  inputView: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'yellow',
    marginTop: 25,
    paddingLeft: 20
  },
  buttonView: {
    width: '60%',
    height: 55,
    backgroundColor: 'yellow',
    marginTop: 30,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    }
})
4_______Flexbox____________________________________________________________________________________________________________________________
import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

export default class Flexbox extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.text}>Hello </Text>
                <Text style={styles.text}>Hello </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        color: '#fff',
        // fontFamily: 'sans-serif;',
        fontWeight: 'bold'
    }
})
5______State_____________________________________________________________________________________________________________________________
import { tsMethodSignature } from "@babel/types";
import React,{Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native'

export default class Flexbox extends Component{
    constructor(){
        super();
        this.state= {
            main_text: "Hello",
            sub_text: "React"
        }
    }

    updateText(){
        this.setState({
            main_text: "Hi (Hello Updated)",
            sub_text: "Framework (React updated)"
        })
    }
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.text}>  {this.state.main_text} </Text>
                <Text style={styles.text}> {this.state.sub_text}</Text>
                <Text style={styles.text}>Native</Text>
                <TouchableHighlight style={styles.button}
                    underlayColor= 'red'
                    onPress= {()=> this.updateText()}> 
                    <Text style={styles.buttonText}>UPDATE</Text>
                </TouchableHighlight>
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row'
    },
    text: {
        fontSize: 25,
        color: '#000',
        // fontFamily: 'sans-serif;',
        fontWeight: 'bold'
    },
    button: {
        width: '60%',
        height: 55,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})
6_Props__________________________________________________________________________________________________________________________________
class FlexContent extends Component{
    render(){
        return(
            <View>
                <Text style={ styles.contentStyle}>Hi my name is {this.props.name}</Text>
            </View>
        )
    }
}
<FlexContent name= "Mark">

</FlexContent>
contentStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#369',
    marginTop: 20
}
7___________________________________________________________________________________________________________________________________

8___________________________________________________________________________________________________________________________________

9___________________________________________________________________________________________________________________________________

10___________________________________________________________________________________________________________________________________

11___________________________________________________________________________________________________________________________________

12___________________________________________________________________________________________________________________________________

13___________________________________________________________________________________________________________________________________

14___________________________________________________________________________________________________________________________________

15___________________________________________________________________________________________________________________________________

16___________________________________________________________________________________________________________________________________

17___________________________________________________________________________________________________________________________________

18___________________________________________________________________________________________________________________________________

19___________________________________________________________________________________________________________________________________

20___________________________________________________________________________________________________________________________________

21___________________________________________________________________________________________________________________________________

22___________________________________________________________________________________________________________________________________
