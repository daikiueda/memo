if( !chai ) var chai = require( "chai" );
var expect = chai.expect;

describe( "Scope", function(){

    describe( "変数の巻き上げ", function(){
    	it( "未宣言の変数を参照するとエラーが発生する。", function(){
    		expect( function(){
    			return hoge;
    		} ).to.throw( Error );
    	} );

    	it( "変数宣言があれば参照はできるが、代入式より前の行では、変数の値はundefinedである。エラーは発生しない。", function(){
    		expect( ( function(){
    			return hoge;
    			var hoge = 1;
    		} )() ).to.be.an( "undefined" );

    		expect( function(){
    			return hoge;
    			var hoge = 1;
    		} ).not.to.throw( Error );
    	} );

    	it( "宣言・代入式の後であれば、当然値を取得できる。", function(){
    		expect( ( function(){
    			var hoge = 1;
    			return hoge;
    		} )() ).to.equal( 1 );
    	} );
    } );

    describe( "コンストラクタ関数の巻き上げ", function(){
        // https://github.com/sindresorhus/multiline
        it( "prototypeで定義されるメソッドは、定義前にnewされたインスタンスからは参照できない。", function(){
            expect( ( new Hoge() ).fuga ).to.be.undefined;

            function Hoge(){}
            Hoge.prototype = {
                fuga: function(){}
            };
        } );
    } );
} );
