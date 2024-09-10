import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { relative } from 'path';
import Bold from '../Libs/Bold';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title='(black band)-تهیه شده توسط تیم پژوهشی تورینگ' style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
        <br-x/>

        <div id='fa'>


        <div id='head'>
          <div style={{width:"auto",height:70,display:"flex"}}>
          <div id='mi' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold",direction:"rtl"}}><br-x/><br-x/>نجوم:</div>
          <div id='weater' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold",direction:"rtl"}}><br-x/><br-x/>آب و هوا:</div>
          <div id='country' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold",direction:"rtl"}}><br-x/><br-x/>منطقه:</div>
          
          </div>
        </div>


        <br-x/>
        <div id='body'>
       <div style={{width:"auto",height:200,direction:"ltr", display:"flex"}}>

<div style={{backgroundColor:"#3ABEF9" , textAlign:"center",fontSize:15,fontWeight:"bold",position:"relative",flex:1,borderRadius:50,direction:"rtl"
      
    }}>
      <br-x/>
      <br-x/>
      <br-x/>
  
      طلوع خورشید: ۶:۲۵ ق.ظ
      <br-x/>
      غروب خورشید: ۷:۴۴ ب.ظ
      <br-x/>
      طلوع ماه: ۱۲:۲۱ ب.ظ
      <br-x/>
      غروب ماه: ۱۱:۲۱ ب.ظ
      <br-x/>
      هلال ماه:فزاینده
    

    </div>


   

    <c-cx style={{ backgroundColor:"#3ABEF9" , textAlign:"center" , position:"relative",
      fontSize:15,flex:1,borderRadius:50, direction:"rtl", fontFamily:"vrb"}}>
      <br-x/>
      <br-x/>
      <br-x/>
      آفتابی
      <br-x/>
      دما: (C) {(parseFloat(props.cc.temp_F) as number).toLocaleString("fa-IR")} (F)  {(parseFloat(props.cc.temp_C) as number).toLocaleString("fa-IR")}
      
      <br-x/>
      رطوبت:٪{(parseFloat(props.cc.humidity)as number).toLocaleString("fa-IR")}
      <br-x/>

       <f-cc style={{width:"100%"}}>
       <f-15>شاخص</f-15>
        <b>UV: </b>
        {(parseFloat(props.cc.uvIndex)as number).toLocaleString("fa-IR")}
       </f-cc>
      <br-x/>
      سرعت باد : (km) {(parseFloat(props.cc.windspeedMiles)as number).toLocaleString("fa-IR")} (miles) {(parseFloat(props.cc.windspeedKmph)as number).toLocaleString("fa-IR")}

      
    </c-cx>

    
    <div style={{backgroundColor:"#3ABEF9" , textAlign:"center",fontSize:18,fontWeight:"bold",flex:1,borderRadius:50,verticalAlign:"center",direction:"rtl"}}>
      <br-x/>
      <br-x/>
      <br-x/>
      کشور:ایران
      <br-x/>
      <br-x/>
      استان:فارس
      <br-x/>
      <br-x/>
      شهر:شیراز
      <br-x/>
      <br-x/>
      جمعیت:{(parseFloat(props.na.population) as number).toLocaleString("fa-IR")}



    </div>



    

</div>

        </div>


        <br-x/>
        

        <div id="foot" style={{width:"auto",height:70,backgroundColor:"#A7E6FF",borderRadius:30,display:"flex"}}>
        <div style={{flex:1,textAlign:"center",fontSize:25,fontWeight:"bold",direction:"rtl"}}>
        <br-x/>
        <br-x/>
          تاریخ:۱۴۰۳/۰۵/۲۱
        </div>
        <div style={{flex:1,textAlign:"center",fontSize:25,fontWeight:"bold",direction:"rtl"}}>
        <br-x/>
        <br-x/>
          دمای متوسط: (C) {(parseFloat(props.w.avgtempF)as number).toLocaleString("fa-IR")} (F) {(parseFloat(props.w.avgtempC)as number).toLocaleString("fa-IR")} 
          
        </div>
      </div>

        </div>
        <br-x/>

        <hr style={{color:"gray"}}></hr>
        {/* ###################################################################################################### */}
        <br-x/>

        <div id='en'>


        <div id='head'>
          <div style={{width:"auto",height:70,display:"flex"}}>
          <div id='mi' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold"}}><br-x/><br-x/>Astronomy:</div>
          <div id='weater' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold"}}><br-x/><br-x/>Weather:</div>
          <div id='country' style={{flex:1,borderRadius:50,backgroundColor:"#A7E6FF",textAlign:"center",fontSize:25,fontWeight:"bold"}}><br-x/><br-x/>Location:</div>
          
          </div>
        </div>


        <br-x/>
        <div id='body'>
       <div style={{width:"auto",height:200,direction:"ltr", display:"flex"}}>

<div style={{backgroundColor:"#3ABEF9" , textAlign:"center",fontSize:15,fontWeight:"bold",position:"relative",flex:1,borderRadius:50
      
    }}>
      <br-x/>
      <br-x/>
      <br-x/>

      Sunrise:{props.w.astronomy[0].sunrise}
      <br-x/>
      Sunset:{props.w.astronomy[0].sunset}
      <br-x/>
      Moonrise:{props.w.astronomy[0].moonrise}
      <br-x/>
      Moonset:{props.w.astronomy[0].moonset}
      <br-x/>
      Moonphase:{props.w.astronomy[0].moon_phase}

    

    </div>


   

    <div style={{ backgroundColor:"#3ABEF9" , textAlign:"center" , position:"relative",
      fontSize:15,fontWeight:"bold",flex:1,borderRadius:50}}>
      <br-x/>
      <br-x/>
      <br-x/>
      {props.cc.weatherDesc[0].value}
      <br-x/>
      Temp:{props.cc.temp_C}(c) {props.cc.temp_F}(f)
      <br-x/>
      Humidity:{props.cc.humidity}%
      <br-x/>
      UV index : {props.cc.uvIndex}
      <br-x/>
      Windspeed : {props.cc.windspeedKmph}(km) {props.cc.windspeedMiles}(miles)

    </div>

    
    <div style={{backgroundColor:"#3ABEF9" , textAlign:"center",fontSize:18,fontWeight:"bold",flex:1,borderRadius:50,verticalAlign:"center"}}>
      <br-x/>
      <br-x/>
      <br-x/>
      Country:{props.na.country[0].value}
      <br-x/>
      <br-x/>
      Province:{props.na.region[0].value}
      <br-x/>
      <br-x/>
      City:{props.na.areaName[0].value}
      <br-x/>
      <br-x/>
      Population:{props.na.population}



    </div>



    

</div>

        </div>


        <br-x/>
        
        
        <div id="foot" style={{width:"auto",height:70,backgroundColor:"#A7E6FF",borderRadius:30,display:"flex"}}>
        <div style={{flex:1,textAlign:"center",fontSize:25,fontWeight:"bold"}}>
        <br-x/>
        <br-x/>
          Date:{props.w.date}
        </div>
        <div style={{flex:1,textAlign:"center",fontSize:25,fontWeight:"bold"}}>
        <br-x/>
        <br-x/>
          Avrage Temp:{props.w.avgtempC}(C) {props.w.avgtempF}(F)
        </div>
      </div>

        </div>
     
      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


    let json = await fetch("https://cdn.ituring.ir/research/api/weather")
    let data = await json.json()
    let cc=data.current_condition[0]
    let na=data.nearest_area[0]
    let r =data.request[0]
    let w =data.weather[0]
    console.log("WEAtheeeeeeeeerrrrrrrrrrrr:",cc)
    console.log("AAARRRReeeeeeeaaaaaa",na)


  return {
    props: {
      data: global.QSON.stringify({
        cc,
        na,
        r,
        w,
        session,
        // nlangs,
      })
    },
  }
}