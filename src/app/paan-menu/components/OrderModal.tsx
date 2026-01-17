'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  alt: string;
  preparationTime: string;
}

interface OrderModalProps {
  isOpen: boolean;
  item: MenuItem | null;
  onClose: () => void;
}

const OrderModal = ({ isOpen, item, onClose }: OrderModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 50) {
      setQuantity(newQuantity);
    }
  };

  const totalPrice = item.price * quantity;

  const handleWhatsAppOrder = () => {
    if (!isHydrated) return;

    const message = `Hello! I would like to order:\n\n*${item.name}*\nQuantity: ${quantity}\nTotal: ₹${totalPrice.toLocaleString('en-IN')}\n${
      specialInstructions ? `\nSpecial Instructions: ${specialInstructions}` : ''
    }\n\nPlease confirm availability and delivery details.`;

    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-lg shadow-organic-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-in-right">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-headline text-2xl text-primary">Complete Your Order</h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 text-foreground hover:bg-surface rounded-lg transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Item Preview */}
          <div className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <AppImage
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-headline text-xl text-primary mb-1">{item.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="ClockIcon" size={16} variant="outline" />
                  <span>{item.preparationTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="CurrencyRupeeIcon" size={16} variant="outline" />
                  <span>₹{item.price.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="font-body font-semibold text-foreground text-sm uppercase tracking-wide">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="flex items-center justify-center w-12 h-12 bg-surface text-foreground hover:bg-muted rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Icon name="MinusIcon" size={20} variant="outline" />
              </button>
              <div className="flex-1 flex items-center justify-center">
                <span className="font-headline text-3xl text-primary">{quantity}</span>
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={quantity >= 50}
                className="flex items-center justify-center w-12 h-12 bg-surface text-foreground hover:bg-muted rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                <Icon name="PlusIcon" size={20} variant="outline" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Maximum 50 pieces per order. For bulk orders, please contact us directly.
            </p>
          </div>

          {/* Special Instructions */}
          <div className="space-y-3">
            <label
              htmlFor="special-instructions"
              className="font-body font-semibold text-foreground text-sm uppercase tracking-wide"
            >
              Special Instructions (Optional)
            </label>
            <textarea
              id="special-instructions"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Any customization requests? (e.g., extra sweet, less spicy, no specific ingredient)"
              rows={4}
              maxLength={200}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
            />
            <p className="text-xs text-muted-foreground text-right">
              {specialInstructions.length}/200 characters
            </p>
          </div>

          {/* Price Summary */}
          <div className="p-4 bg-accent/10 border border-accent rounded-lg space-y-2">
            <div className="flex items-center justify-between text-sm font-body">
              <span className="text-muted-foreground">Price per piece:</span>
              <span className="font-medium text-foreground">₹{item.price.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex items-center justify-between text-sm font-body">
              <span className="text-muted-foreground">Quantity:</span>
              <span className="font-medium text-foreground">{quantity} piece{quantity > 1 ? 's' : ''}</span>
            </div>
            <div className="pt-2 border-t border-accent/30 flex items-center justify-between">
              <span className="font-headline text-lg text-primary">Total Amount:</span>
              <span className="font-headline text-2xl text-primary">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Order Info */}
          <div className="p-4 bg-surface rounded-lg space-y-2">
            <div className="flex items-start space-x-2">
              <Icon name="InformationCircleIcon" size={20} variant="solid" className="text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm font-body text-muted-foreground space-y-1">
                <p>• Orders are prepared fresh upon confirmation</p>
                <p>• Estimated preparation time: {item.preparationTime}</p>
                <p>• Payment accepted: Cash on pickup/delivery</p>
                <p>• For bulk orders (&gt;50 pieces), please call us directly</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-surface text-foreground hover:bg-muted rounded-lg font-body font-semibold transition-colors duration-300"
            >
              <Icon name="ArrowLeftIcon" size={20} variant="outline" />
              <span>Back to Menu</span>
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-brand-orange-cta text-white hover:bg-opacity-90 rounded-lg font-cta font-bold shadow-organic hover:shadow-organic-lg transition-all duration-300"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;