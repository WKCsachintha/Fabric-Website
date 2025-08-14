import React, { useState } from 'react';
import { Bell, Package, Heart, Tag, Settings, Check, X } from 'lucide-react';

interface Notification {
  id: string;
  type: 'order' | 'wishlist' | 'promotion' | 'system';
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and is on its way!',
      timestamp: '2 hours ago',
      isRead: false
    },
    {
      id: '2',
      type: 'wishlist',
      title: 'Item Back in Stock',
      message: 'The Elegant Evening Dress you wishlisted is now available.',
      timestamp: '1 day ago',
      isRead: false
    },
    {
      id: '3',
      type: 'promotion',
      title: 'Flash Sale Alert',
      message: 'Get 30% off on all summer collection items. Limited time offer!',
      timestamp: '2 days ago',
      isRead: true
    },
    {
      id: '4',
      type: 'system',
      title: 'Profile Updated',
      message: 'Your profile information has been successfully updated.',
      timestamp: '3 days ago',
      isRead: true
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread' | 'order' | 'wishlist' | 'promotion'>('all');

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, isRead: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, isRead: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <Package size={20} className="text-blue-600" />;
      case 'wishlist':
        return <Heart size={20} className="text-red-500" />;
      case 'promotion':
        return <Tag size={20} className="text-green-600" />;
      case 'system':
        return <Settings size={20} className="text-slate-600" />;
      default:
        return <Bell size={20} className="text-slate-600" />;
    }
  };

  const filteredNotifications = notifications.filter(notif => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notif.isRead;
    return notif.type === filter;
  });

  const unreadCount = notifications.filter(notif => !notif.isRead).length;

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Notifications</h1>
            {unreadCount > 0 && (
              <p className="text-slate-600 mt-1">{unreadCount} unread notifications</p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { key: 'all', label: 'All' },
            { key: 'unread', label: 'Unread' },
            { key: 'order', label: 'Orders' },
            { key: 'wishlist', label: 'Wishlist' },
            { key: 'promotion', label: 'Promotions' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tab.key
                  ? 'bg-slate-800 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell size={48} className="mx-auto text-slate-400 mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No notifications</h3>
              <p className="text-slate-600">You're all caught up!</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${
                  notification.isRead 
                    ? 'border-stone-200' 
                    : 'border-rose-400 bg-rose-50/30'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium text-slate-800">
                          {notification.title}
                        </h3>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-slate-600 mb-2">{notification.message}</p>
                      <p className="text-sm text-slate-500">{notification.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!notification.isRead && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-slate-600 hover:text-slate-800 transition-colors"
                        title="Mark as read"
                      >
                        <Check size={16} />
                      </button>
                    )}
                    <button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      title="Delete notification"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-800">Order Updates</h3>
                <p className="text-sm text-slate-600">Get notified about order status changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-400"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-800">Wishlist Alerts</h3>
                <p className="text-sm text-slate-600">Get notified when wishlist items are back in stock</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-400"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-slate-800">Promotional Offers</h3>
                <p className="text-sm text-slate-600">Receive notifications about sales and special offers</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-rose-400"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;