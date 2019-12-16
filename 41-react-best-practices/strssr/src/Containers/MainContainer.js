import React from 'react';
import StressListItem from '../Components/StressListItem'

class MainContainer extends React.Component{

    state = {
      strssrs: [],
    }

    renderStrssrs = () => {
        let filteredStrssrs = this.state.strssrs
          .filter(stress => stress.name.toLowerCase().includes(this.props.searchTerm.toLowerCase())) // []

        return filteredStrssrs.map((stress, ind) => {
          let {level, ...stressProps } = stress // say we didnt want to pass level... destructure it out and use spread to collect other values into stressProps
          // console.log(stressProps)
           return <StressListItem 
            key={ind}
            // {...stressProps} THEN spread stressProps to pass all keys down as props 
            id={stress.id}
            name={stress.name} 
            level={stress.level} 
            image={stress.image}
            duration={stress.duration}
            handleClick={this.props.handleClick}
          />
          }
        )
      }

    componentDidMount() {
      fetch('http://localhost:3001/strssrs')
        .then(res => res.json())
        .then(data => {
          this.setState({ strssrs: data })
        })
      
    }

    render(){ // eventually some conditional logic for if i'm looking at ALL strssrs or JUST ONE
        return (
          <>
            <div className="stress-holder">
                {this.renderStrssrs()}
            </div>
          </>
        )
    }
}

export default MainContainer;




/****
 * 
 * 
 * [1,2,3].map(num => return num*2 ) ====> [2,4,6]
 * 
 * 
 * tracker = 0 
 * [1,2,3].forEach(num => tracker + num )
 * 
 * 
 * 
 */