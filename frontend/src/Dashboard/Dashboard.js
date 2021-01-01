import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        <img src="https://s2.bukalapak.com/uploads/content_attachment/728920b220e8d762189005c5/w-744/spare_part1.jpg" className="rounded mx-auto d-block" alt="..."></img>
        <h2 className="text-center">SparePartS</h2>
        <h4 className="text-center">Telusur dan dapatkan spare parts terbaik untuk keperluan mobil anda</h4>
      </div>
    );
  }
}

export default Dashboard;
