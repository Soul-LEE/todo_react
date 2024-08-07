import './Bottom.css'

//함수표현식

const Bottom = function(){
    return(
        <div className="Bottom">
            <h2>Bottom 컴포넌트입니다</h2>
        </div>
    );
};

//arrow함수
const Bottom2 = ()=>{
    return(
        <div className="Bottom">
        <h2>Bottom2 컴포넌트입니다</h2>
    </div>


    );
}


export {Bottom,Bottom2 };