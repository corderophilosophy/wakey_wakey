import {
  PixelRatio
} from 'react-native';

module.exports = {
  mainText: {
    color: 'white',
    fontSize: 20,
  },
  mainContainer: {
    backgroundColor: '#c3c3c3',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#dadada',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  alarmsList: {
    flex: 5,
    flexDirection: 'column',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  alarmButtonContainer: {
    flex: 1,
    backgroundColor: '#002174',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  addAlarmButton: {
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  alarmItemContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    backgroundColor: '#c3c3c3',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderBottomWidth: 5,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomColor: 'red',
  },
  alarmTimeContainer: {
    flex: 1,
  },
  alarmLabelContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  addAlarmScreenContainer: {
    flex: 1,
    backgroundColor: 'dodgerblue',
  },
  selected: {
    textDecoration: 'none',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#002174',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    zIndex: 1,
  },
  headerText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  row: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#CDCDCD',
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
  replyContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 2,
  },
  basicText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002147',
    textAlignVertical: 'center',
  },
  iconShadow: {
    textShadowColor: '#bababa',
    textShadowRadius: 20,
    textShadowOffset: {width: 2, height: 2,},
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  today: {
    fontSize: 34,
    color: '#d3d3d3'
  },
  backdrop: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.5,
    width: 415,
    height: 165,
  },
};
