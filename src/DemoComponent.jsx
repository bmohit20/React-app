import React from "react";
// Styles
import "./DemoComponent.css";
// Component
import BlockComponent from "./BlockComponent";
// Json
import Demo from './Demo.json';

class DemoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      blocks: [],
      loadedBlocks: 3
    };
  }

  componentDidMount = () => {
    this.getData().then((data) => {
      console.log(data);
      this.setState({ blocks: data });
    });
  };

  getData = () => {
    // API Call, Still getting CORS issue while fatching the data
    return fetch("http://blockchain.info/blocks/1328830483000?format=json", {
      headers: {cors: true, "Access-Control-Allow-Origin": "*" },
    }).then((res) => {
      return Promise.resolve(res);
    }).catch((err) => {
      // Fallback UI here
      return Promise.resolve(Demo.blocks)
    });
    // Call service here using promise as a return and with try catch block.
  };

  viewMore = () => {
    if (this.state.loadedBlocks < this.state.blocks.length) {
      this.setState((prevState) => ({
        loadedBlocks: prevState.loadedBlocks + 3
      }))
    } else {
      this.setState((prevState) => ({
        loadedBlocks: 3
      }))
    }
  }

  getBlock = () => {
    return this.state.blocks && this.state.blocks.length && this.state.blocks.map((block, index) => {
      if (index >= this.state.loadedBlocks) {
        return '';
      }
      return <BlockComponent block={block} key = {block.id}></BlockComponent>;
    });
  };

  render = () => {
    return (
      <React.Fragment>
        <div className="block-data container">
          <h1 className="data-heading col-xs-12">Data Heading</h1>
          <div className="block-element col-xs-12">{this.getBlock()}</div>
          <div className='button-container'>
          <button className='view-more' onClick={this.viewMore}>{this.state.loadedBlocks < this.state.blocks.length ? 'View More' : 'View Less'}</button>
          </div>
        </div>
      </React.Fragment>
    );
  };
}
export default DemoComponent;
