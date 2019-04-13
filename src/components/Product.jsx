import React from 'react'; // import react module
import "../style.css";// // import our external css file

class Product extends React.Component {

  constructor(){
    super();

      // Bind our handleClick method (sets 'this' explicitly to refer to this componenent)
    // We did this because 'this' would refer to the source of the click events
    this.handleProductUpVote = this.handleProductUpVote.bind(this);

  }

  handleProductUpVote() {
    this.props.onVote(this.props.id);
  }

    render() {
        return (
              <div className='container'>
                <div className="row">
                    <div className="main">
                        <div className="flexbox-row">  

                          <div className="image">  
                            <img src={this.props.productImageUrl} />
                          </div> 

                          <div className="fexbox-content">

                            <div className='header'>
                              <a onClick={this.handleProductUpVote}>
                                <i className='float triangle-up' />
                              </a>
                              <span>{this.props.votes}</span>
                            </div>
                            <div className='description'>
                              <a href={this.props.url}>
                                {this.props.title}
                              </a>
                              <p>
                                {this.props.description}
                              </p>
                            </div>
                            <div className='extra'>
                              <span>Submitted by:</span>
                              <img
                                className='avatar'
                                src={this.props.submitterAvatarUrl}
                              />
                            </div>
                            
                          </div>
                      </div>
                    </div>
                </div>
              </div>
        );
      }
}

export default Product;