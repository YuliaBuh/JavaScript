function chessboard() {
   var Table = document.createElement( 'table' ),
       lets = [ '','A','B','C','D','E','F','G','H','' ],
       
       black1 = [ '8','Л','К','С','К','Ф','С','К','Л','8' ],
       white1 = [ '1','Л','К','С','Ф','К','С','К','Л','1' ],
       black2 = [ '7','П','П','П','П','П','П','П','П','7' ],
       white2 = [ '2','П','П','П','П','П','П','П','П','2' ];

   for ( var i = 0, a = 9; i < 10, a >= 0; i++, a-- ) {
       var newTr = Table.insertRow(i);
       for ( var j = 0; j < 10; j++ ) {
           var newTd = newTr.insertCell( j );
                       switch (i) {
               case 0:
                   newTd.innerText = lets[ j ];
                   break;
               case 1:
                   newTd.innerHTML = black1[ j ];
                   break;
               case 2:
                   newTd.innerHTML = black2[ j ];
                   break;
               case 7:
                   newTd.innerHTML = white2[ j ];
                   break;
               case 8:
                   newTd.innerHTML = white1[ j ];
                   break;
               case 9:
                   newTd.innerText = lets[ j ];
                   break;
               default:
                   if ( j === 0 || j === 9 ) {
                       newTd.innerHTML = a;
                   }
                   break;
           }
       }
   }
   var elem = document.getElementsByClassName( 'newClass' );
   document.body.appendChild( Table );
};
chessboard();

