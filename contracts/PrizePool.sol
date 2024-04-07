pragma solidity ^0.8.0;

contract PrizePool {

  address payable public organizer;
  uint public totalPrizePool;

  event PrizePoolDeposited(address indexed from, uint amount);

  modifier onlyOrganizer() {
    require(msg.sender == organizer, "Only organizer can call this function");
    _;
  }

  constructor(address payable _organizer) {
    organizer = _organizer;
  }

  function depositToPool() public payable onlyOrganizer {
    require(msg.value > 0, "Deposit amount must be greater than zero");
    totalPrizePool += msg.value;
    emit PrizePoolDeposited(msg.sender, msg.value);
  }
}
