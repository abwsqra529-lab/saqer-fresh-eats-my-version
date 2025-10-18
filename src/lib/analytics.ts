// Analytics tracking utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Google Analytics 4 tracking
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  // Google Analytics
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
  
  // Facebook Pixel
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', eventName, eventParams);
  }
};

// Specific event tracking functions
export const trackAddToCart = (item: { id: string; name: string; price: number; category?: string }) => {
  trackEvent('add_to_cart', {
    currency: 'SAR',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: 1,
    }],
  });
};

export const trackViewItem = (item: { id: string; name: string; price: number; category?: string }) => {
  trackEvent('view_item', {
    currency: 'SAR',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
    }],
  });
};

export const trackPurchase = (orderId: string, total: number, items: any[]) => {
  trackEvent('purchase', {
    transaction_id: orderId,
    value: total,
    currency: 'SAR',
    items: items,
  });
};

export const trackBeginCheckout = (total: number, items: any[]) => {
  trackEvent('begin_checkout', {
    value: total,
    currency: 'SAR',
    items: items,
  });
};

export const trackSubscribe = (planName: string, value: number) => {
  trackEvent('subscribe', {
    plan: planName,
    value: value,
    currency: 'SAR',
  });
};
