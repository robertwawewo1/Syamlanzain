import React,{ useState, useEffect } from 'react';
import {View, Text, ImageBackground, StatusBar, TouchableOpacity, Image} from 'react-native'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} 
      barStyle="light-content"
      />
      <ImageBackground source={require('./src/images/Annuqayah.png')} style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{marginTop: 100}}>
            
          <Text style={{fontSize: 30,
            color: '#FFFFFF', 
            fontWeight: 'bold',
            textAlign: 'center'
            }}> 
            Selamat Datang 
            </Text>
            <Text style={{fontSize: 15,
            color: '#F5F5F5F5', 
            textAlign: 'center'
            }}>
               Pondok Pesantren Annuqayah 
               </Text>
        </View>
        
        </View>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', paddingBottom: 40 }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, height: 2, backgroundColor: '#FFFFFF', alignSelf: 'center'}}/>
            <Text style={{fontSize: 15,
            color: '#F5F5F5F5', 
            textAlign: 'center',
            paddingHorizontal: 20
            }}> 
            Login dengan
            </Text>
            <View style={{flex: 1, 
              height: 2, 
              backgroundColor: '#FFFFFF', 
              alignSelf: 'center'
              }}/>
          </View>
          <TouchableOpacity 
            style={{backgroundColor:'#FFFFFF',
            marginHorizontal: 20,
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 20,
            elevation: 2,
            flexDirection: 'row',
            }}>
              <Image source={require('./src/images/Google.png')} 
              style={{width: 25, height:25, marginRight: 10 }}/>
            <Text style={{color: '#212121', fontWeight: 'bold'}}>
              Login dengan Google
              </Text>
            </TouchableOpacity>  
            <TouchableOpacity 
            style={{backgroundColor:'#FFFFFF',
            marginHorizontal: 20,
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 8,
            elevation: 2,
            flexDirection: 'row',
            }}>
              <Image source={require('./src/images/Facebook.png')} 
              style={{width: 25, height:25, marginRight: 10 }}/>
            <Text style={{color: '#212121', fontWeight: 'bold'}}>
              Login dengan Facebook
              </Text>
            </TouchableOpacity> 
            <TouchableOpacity 
            style={{backgroundColor:'#FFFFFF',
            marginHorizontal: 20,
            paddingVertical: 12,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            marginTop: 8,
            elevation: 2,
            flexDirection: 'row',
            }}>
              <Image source={require('./src/images/Apple.png')} 
              style={{width: 25, height:25, marginRight: 10 }}/>
            <Text style={{color: '#212121', fontWeight: 'bold'}}>
              Login dengan Google
              </Text>
            </TouchableOpacity> 
            <TouchableOpacity>
              <Text style={{fontSize: 15,
              color: '#F5F5F5F5', 
              textAlign: 'center',
              paddingHorizontal: 20,
              marginTop: 10,
              }}> 
              Belum punya akun? {' '}
              <Text style={{textDecorationLine: 'underline'}}>Registrasi disini</Text>
            </Text>
            </TouchableOpacity>      
        </View>
        
      
      </View>
      </ImageBackground>
      
      
    </View>
  );
}

export default App;
