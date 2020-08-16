import React from 'react';
import DogPicture from './dog.jpg';
import DogSound from './dog.mp3';
import './App.css';


class App extends React.Component {

     componentDidMount() {
         setInterval(() =>this.changeClass(), 2000); }

   state= {
        list: [
            {id: 0, class: "photo" },
            {id: 1, class: "photo" },
            {id: 2, class: "photo" },
            {id: 3, class: "photo" },
            {id: 4, class: "photo" },
            {id: 5, class: "photo" },
            {id: 6, class: "photo" },
            {id: 7, class: "photo" },
            {id: 8, class: "photo" }
        ],
        counter: 0
    };

    render = () => {

        let DogList = this.state.list.map( elem=>
            <div className="item"><img src={DogPicture} className={elem.class} onClick={this.click}/></div> );

                  this.changeClass = () => {
                         let getRandomImageIndex= ()=> {return Math.floor(Math.random() * 9); };
                         let index= getRandomImageIndex ();
                    let newSt = this.state.list.map(listEl => {
                    if (listEl.id === index) {
                    return {...listEl, class: "photo show"}
                    } else {
                    return {...listEl, class: "photo"}
                    }
                    });
                    this.setState({list: newSt});
        };

         this.click=()=>{
             let num=this.state.counter;
              num++;
              this.setState({counter: num});

              this.player.play();                // same result in JS:    <<-   document.getElementById('sound').play()    ->>

                };



        return (

           <div className="App">

               <audio id='sound' src={DogSound} ref={ref => (this.player = ref)} ></audio>

               <div className="wrapper"> {DogList} </div>
               <div className = "counter"> {this.state.counter} </div>

               {/*<audio controls="controls">*/}
               {/*    <source src={DogSound} />*/}
               {/*</audio>*/}

            </div>

        );
    }
}

export default App;