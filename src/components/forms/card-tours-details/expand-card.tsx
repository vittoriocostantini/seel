import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Animated, Easing, ImageSourcePropType } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface Detail {
  label: string;
  text: string;
}

interface ExpandCardProps {
  day: string;
  title: string;
  subTitle?: string;
  details: Detail[];
}

function ExpandCard({  day, title, subTitle, details }: ExpandCardProps) {
  const [collapsed, setCollapsed] = useState(true);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const maxHeight = 150;
  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxHeight],
  });
  const animatedOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  // Animación de color de fondo y borde
  const animatedBgColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#f5f6f7'],
  });
  const animatedBorderColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(33,37,41,0.2)', '#f5f6f7'],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={toggleCollapse}
    >
      <Animated.View
        style={[
          styles.card,
          {
            backgroundColor: animatedBgColor,
            borderColor: animatedBorderColor,
          },
        ]}
      >
        <View style={styles.row}>
          <AntDesign
            name="calendar"
            size={40}
            color="#888"
            style={styles.calendarIcon}
          />
          <View style={styles.textContainer}>
            <Text style={styles.day}>{day}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>Highlights</Text>
            {!!subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
          <AntDesign
            name={collapsed ? 'down' : 'up'}
            size={20}
            color="#222"
            style={styles.icon}
          />
        </View>
        <Animated.View style={[styles.expandContent, { height: animatedHeight, opacity: animatedOpacity }]}> 
          {details.map((detail, idx) => (
            <View style={styles.detailRow} key={idx}>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              <Text style={styles.detailText}>{detail.text}</Text>
            </View>
          ))}
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 10,
    borderWidth: 2,
    borderColor: 'rgba(33,37,41,0.2)',
    marginVertical: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  image: {
    width: 70,
    height: 58,
    borderRadius: 12,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  day: {
    color: '#888',
    fontSize: 13,
    marginBottom: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#212529',
  },
  subTitle: {
    fontWeight: 'light',
    fontSize: 13,
    color: '#212529',
  },
  icon: {
    marginLeft: 8,
  },
  calendarIcon: {
    marginRight: 12,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  expandContent: {
    overflow: 'hidden',
    marginTop: 10,
  },
  detailRow: {
    marginBottom: 8,
  },
  detailLabel: {
    color: '#888',
    fontSize: 13,
    marginBottom: 2,
    fontWeight: '600',
  },
  detailText: {
    color: '#222',
    fontSize: 15,
    marginBottom: 2,
  },
});

export default ExpandCard; 