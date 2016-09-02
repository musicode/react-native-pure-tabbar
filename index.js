'use strict'

import React, {
  Component,
  PropTypes,
} from 'react'

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import styles from './style'

export default class TabBar extends Component {

  static propTypes = {
    style: View.propTypes.style,
  }

  render() {
    let {
      style,
    } = this.props
    return (
      <View style={style ? [styles.tabBar, style] : styles.tabBar}>
        {this.props.children}
      </View>
    )
  }
}

class TabBarItem extends Component {

  static propTypes = {
    selected: PropTypes.bool,

    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    selectedTitleStyle: Text.propTypes.style,
    renderTitle: PropTypes.func,

    renderIcon: PropTypes.func,

    badge: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    renderBadge: PropTypes.func,

    style: View.propTypes.style,
    selectedStyle: View.propTypes.style,

    onPress: PropTypes.func,
  }

  render() {

    let {
      selected,

      title,
      titleStyle,
      selectedTitleStyle,
      renderTitle,

      renderIcon,

      badge,
      renderBadge,

      style,
      selectedStyle,

      onPress,
    } = this.props

    let iconElement
    if (typeof renderIcon === 'function') {
      iconElement = renderIcon(selected)
    }

    let titleElement

    let titleType = typeof title
    if (titleType === 'string' || titleType === 'number') {
      if (selected) {
        titleStyle = selectedTitleStyle
      }
      titleElement = (
        <Text style={
          titleStyle
          ? [styles.titleText, titleStyle]
          : styles.titleText
        }>
          {title}
        </Text>
      )
    }
    else if (typeof renderTitle === 'function') {
      titleElement = renderTitle(selected)
    }

    let badgeElement
    let badgeType = typeof badge
    if (badgeType === 'string' || badgeType === 'number') {
      if (badge) {
        badgeElement = (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              {badge}
            </Text>
          </View>
        )
      }
      else {
        badgeElement = (
          <View style={styles.smallBadge} />
        )
      }
    }
    else if (typeof renderBadge === 'function') {
      badgeElement = renderBadge(selected)
    }

    if (selected) {
      style = selectedStyle
    }

    return (
      <TouchableOpacity
        style={style ? [ styles.tabBarItem, style ] : styles.tabBarItem}
        onPress={onPress}
      >
        <View>
          {iconElement}
          {titleElement}
          {badgeElement}
        </View>
      </TouchableOpacity>
    )
  }

}

TabBar.Item = TabBarItem
