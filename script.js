function salam(params) {
    alert('Selamat pagi');
    
}

let npm = "2125250098";
let umur = 17;
let status = true;
let hobi = ['Game', 'Travelling'];
let mahasiswa = {
    nama: 'Danang',
    umur: 17,
    hobi: ['Game' , 'Travelling']
};

document.getElementById('npm').innerHTML = npm;
document.getElementById('umur').innerHTML = umur;
document.getElementById('status').innerHTML = status;
document.getElementById('hobi').innerHTML = hobi[0]+',' +hobi[1];

document.getElementById('mahasiswa').innerHTML = mahasiswa.nama+', '+mahasiswa.umur+','+mahasiswa.hobi[0]+','+mahasiswa.hobi[1];

function tampilHobi(item, index){
    console.log(item);

    }

    function tampilHobi2(){
        for(let x in hobi){
            console.log(hobi[x]);
    }
}

for(let y in mahasiswa){
    console.log(mahasiswa[y]);
}

if(umur == 18 ){
    //console.log"remaja";
    keterangan = "remaja";
}else{
    // console.log("anak-anak atau orang tua");
    keterangan = "anak-anak atau orang tau";
}