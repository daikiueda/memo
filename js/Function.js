var expect = chai.expect;

describe( 'Function', function(){

    it( '関数オブジェクトのlengthプロパティで、仮引数の数が取得できる。', function(){
        expect( ( function(){} ).length ).equal( 0 );
        expect( ( function( hoge ){} ).length ).equal( 1 );
        expect( ( function( hoge, foo ){} ).length ).equal( 2 );
    } );
} );
