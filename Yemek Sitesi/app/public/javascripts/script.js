

var arr=[];
let ar={};
const arr2=["Giriş Başarılı","şifre Hatalı","Kayıt Bulunamadı"]

const delet=()=>{
    document.getElementById('girisad').value="";
    document.getElementById('girissoyad').value="";
    document.getElementById('girisal').value="";
    document.getElementById('giriskullanıcı').value="";
}
const basarı=()=>{
    alert("Kayıt Başarılı");
}
const basarısız=(i)=>{
 if(i==0){ alert("Giriş Başarılı");}
 else if(i==1){ alert("Şifre Hatalı");}
 else if(i==2){ alert("Kayıt Bulunamadı");}
   
}
const del=()=>{
    document.getElementById('girisal').value="";
    document.getElementById('giriskullanıcı').value="";

}
const kontrol=()=>{
    var depo=localStorage.getItem("user3")
    console.log(depo)
    
    for(let y=0;y<localStorage.length;y++){
      arr=JSON.parse(depo)
    }
console.log(arr)
const c=document.getElementById('girisal').value;
const d=document.getElementById('giriskullanıcı').value;
const n={sifre:c,kullanıcıadı:d};
var l=0
for(let i=0;i<arr.length;i++){
   
    
        
       if(arr[i].kullanıcıadı==n.kullanıcıadı){
        if(arr[i].sifre==n.sifre){
            l++;
             ///setTimeout(basarısız(0),100)
             localStorage.setItem('Name',arr[i].kullanıcıadı);
             localStorage.setItem('soyad',arr[i].soyad);
             location.assign('anasayfa')

             break;
            }
            else{
                l++;
             setTimeout(basarısız(1),100)
             break;
            }
       }
       
    
}
if(l==0){
    setTimeout(basarısız(2),100)
    l=1;
}
del();
}
const deneme=()=>{
localStorage.user3=JSON.stringify(arr)
location.assign('giris')

}
const yaz=()=>{
    const a=document.getElementById('mesaj').value="sdbm";
}
 const func=()=>{
     let r=0;
const a=document.getElementById('girisad').value;
const b=document.getElementById('girissoyad').value;
const c=document.getElementById('girisal').value;
const d=document.getElementById('giriskullanıcı').value;
for(let f=0;f<arr.length;f++){
if(arr[f].kullanıcıadı==d){
    alert("Kullanıcı adı önceden alınmıştır")
    document.getElementById('giriskullanıcı').value=""
    r=1;
}

}
if(r==0){
    const n={isim: a, soyad:b,sifre:c,kullanıcıadı:d};

    arr.unshift(n);
 delet();
}
else{

}



console.log(arr);

 }