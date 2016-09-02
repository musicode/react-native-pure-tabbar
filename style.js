import {
  StyleSheet,
  PixelRatio,
} from 'react-native'

const borderWidth = 1 / PixelRatio.get()

const badge = {
  position: 'absolute',
  left: 22,
  top: -2,
  backgroundColor: '#f43531',
  borderRadius: 10,
}

export default StyleSheet.create({
  tabBar: {
    height: 50,
    backgroundColor: '#f7f7f7',
    borderTopColor: '#b2b2b2',
    borderTopWidth: borderWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarItemWrapper: {
    alignItems: 'center',
  },
  titleText: {
    color: '#949494',
    textAlign: 'center',
  },
  smallBadge: {
    ...badge,
    padding: 5,
  },
  badge: {
    ...badge,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
  }
})
