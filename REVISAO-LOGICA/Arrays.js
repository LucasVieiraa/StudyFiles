//Formal
const arr = new Array()
arr[0] = 'Lucas';
arr[1] = 19;
arr[2] = 'SP';
  const arr2 = new Array(true, 'Lucas', 444, new Array(1, 2, 3), {nome:'Lucas', id: '55214', idade: 19})

   console.log(arr2[3][0]);
   console.log('--------------');
   console.log(arr);

//------------------------------------------------------------------------------------------------------------
//Literal 
const lite = ['Lucas', 55, [3, 6, 9], true];
   //forma de adicionar algo em uma array:
   lite[4] = 'Novo valor';
   lite[lite.length] = 'Novo valor 2';
   lite.push('Add pelo push()') 

       console.log('______________________________________________________');
       console.log(lite);
       console.log(lite[2]);
       console.log(lite[2][2]);
       console.log('______________________________________________________');
