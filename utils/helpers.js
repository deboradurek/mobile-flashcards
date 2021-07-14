import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Notifications */

const NOTIFICATION_KEY = 'FlashcardsNotification';

// Clear all notifications

export function clearAllNotifications() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(() => {
    Notifications.cancelAllScheduledNotificationsAsync();
  });
}

// Set notification

export function setNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Notifications.requestPermissionsAsync().then(({ ios: { status } }) => {
          if (status === 2) {
            Notifications.scheduleNotificationAsync({
              identifier: 'createNotification',
              content: {
                title: "Let's play a Quiz 🎯",
                body: "👋 Don't forget to complete your quiz today!",
                sound: true,
              },
              trigger: {
                seconds: 24 * 60 * 60,
                repeats: true,
              },
            });

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
