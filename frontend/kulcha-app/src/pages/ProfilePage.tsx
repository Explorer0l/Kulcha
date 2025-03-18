import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  MainContent, 
  ProfileHeading, 
  ProfileSection,
  OrderHistoryItem,
  OrderDate,
  OrderTotal,
  AddressSection,
  FormGroup,
  Label,
  Input,
  OptionButtons,
  OptionButton,
  Badge,
  Divider,
  EmptyState,
  PageTransition
} from '../styles/Components';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { useAppContext } from '../contexts/AppContext';
import useTelegram from '../hooks/useTelegram';
import styled from 'styled-components';

type ProfileTab = 'orders' | 'address';

const ProfileContainer = styled(PageTransition)`
  min-height: 70vh;
`;

const TabContainer = styled(OptionButtons)`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--background-color);
  padding: var(--spacing-sm) 0;
  margin-bottom: var(--spacing-lg);
`;

const TabButton = styled(OptionButton)`
  border-radius: var(--border-radius-lg);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`;

const AddressForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthFormGroup = styled(FormGroup)`
  grid-column: span 2;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`;

const SaveButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  width: 100%;
  margin-top: var(--spacing-md);
  
  &:hover {
    background-color: var(--primary-light);
  }
`;

const EnhancedOrderItem = styled(OrderHistoryItem)`
  background-color: var(--card-bg);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

const OrderId = styled.span`
  font-weight: 600;
  color: var(--text-color);
`;

const OrderStatus = styled.span<{ $status: string }>`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${props => {
    switch(props.$status) {
      case 'delivered': return '#4CAF50';
      case 'cancelled': return '#F44336';
      default: return '#FF9800';
    }
  }};
  color: white;
`;

const OrderItemList = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-sm);
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 0.9rem;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
`;

const OrderItemName = styled.span`
  color: var(--text-color);
`;

const OrderItemPrice = styled.span`
  color: var(--text-secondary);
`;

const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-sm);
`;

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('orders');
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();
  const { 
    orderHistory, 
    userAddress,
    updateUserAddress
  } = useAppContext();
  
  const { 
    showBackButton, 
    hideBackButton, 
    setBackButtonCallback, 
    hideMainButton
  } = useTelegram();

  useEffect(() => {
    showBackButton();
    hideMainButton();
    
    setBackButtonCallback(() => {
      navigate('/');
    });

    return () => {
      hideBackButton();
    };
  }, [hideBackButton, hideMainButton, navigate, setBackButtonCallback, showBackButton]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateUserAddress({
      ...userAddress || {
        street: '',
        houseNumber: '',
      },
      [name]: value
    });
    setSaved(false);
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    // In a real app, you would also save this to the backend
  };

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'delivered': return 'Delivered';
      case 'cancelled': return 'Cancelled';
      default: return 'Pending';
    }
  };

  return (
    <ProfileContainer>
      <Container>
        <Header />
        <Navigation />
        <MainContent>
          <ProfileHeading>Your Profile</ProfileHeading>
          
          <TabContainer>
            <TabButton 
              onClick={() => setActiveTab('orders')} 
              $active={activeTab === 'orders'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Order History
            </TabButton>
            <TabButton 
              onClick={() => setActiveTab('address')} 
              $active={activeTab === 'address'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Delivery Address
            </TabButton>
          </TabContainer>
          
          {activeTab === 'address' && (
            <AddressSection>
              <ProfileHeading>Delivery Address</ProfileHeading>
              {saved && (
                <div style={{ 
                  padding: 'var(--spacing-sm)', 
                  backgroundColor: '#4CAF50', 
                  color: 'white', 
                  borderRadius: 'var(--border-radius-sm)',
                  marginBottom: 'var(--spacing-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Address saved successfully!
                </div>
              )}
              <AddressForm onSubmit={handleSaveAddress}>
                <FormGroup>
                  <Label htmlFor="street">Street</Label>
                  <Input
                    type="text"
                    id="street"
                    name="street"
                    value={userAddress?.street || ''}
                    onChange={handleAddressChange}
                    placeholder="Enter street name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="houseNumber">House Number</Label>
                  <Input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={userAddress?.houseNumber || ''}
                    onChange={handleAddressChange}
                    placeholder="Enter house number"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="apartment">Apartment (optional)</Label>
                  <Input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={userAddress?.apartment || ''}
                    onChange={handleAddressChange}
                    placeholder="Enter apartment number"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="floor">Floor (optional)</Label>
                  <Input
                    type="text"
                    id="floor"
                    name="floor"
                    value={userAddress?.floor || ''}
                    onChange={handleAddressChange}
                    placeholder="Enter floor number"
                  />
                </FormGroup>
                <FullWidthFormGroup>
                  <Label htmlFor="comment">Special Instructions</Label>
                  <Input
                    type="text"
                    id="comment"
                    name="comment"
                    value={userAddress?.comment || ''}
                    onChange={handleAddressChange}
                    placeholder="Any special instructions for delivery"
                  />
                </FullWidthFormGroup>
                <FullWidthFormGroup>
                  <SaveButton type="submit">
                    Save Address
                  </SaveButton>
                </FullWidthFormGroup>
              </AddressForm>
            </AddressSection>
          )}
          
          {activeTab === 'orders' && (
            <ProfileSection>
              <ProfileHeading>Order History</ProfileHeading>
              
              {orderHistory.length === 0 ? (
                <EmptyState>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <h3>No orders yet</h3>
                  <p>You haven't placed any orders yet.</p>
                  <SaveButton onClick={() => navigate('/')}>
                    Browse Menu
                  </SaveButton>
                </EmptyState>
              ) : (
                orderHistory.map(order => (
                  <EnhancedOrderItem key={order.id}>
                    <OrderHeader>
                      <OrderDate>
                        <OrderId>Order #{order.id}</OrderId> - {formatDate(order.date)}
                      </OrderDate>
                      <OrderStatus $status={order.status}>
                        {getStatusText(order.status)}
                      </OrderStatus>
                    </OrderHeader>
                    <OrderItemList>
                      {order.items.map(item => (
                        <OrderItem key={item.id}>
                          <OrderItemName>{item.name} × {item.quantity}</OrderItemName>
                          <OrderItemPrice>₽{item.price * item.quantity}</OrderItemPrice>
                        </OrderItem>
                      ))}
                    </OrderItemList>
                    <OrderFooter>
                      <div>
                        Delivery Method: 
                        <Badge>
                          {order.deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}
                        </Badge>
                      </div>
                      <OrderTotal>₽{order.totalAmount}</OrderTotal>
                    </OrderFooter>
                  </EnhancedOrderItem>
                ))
              )}
            </ProfileSection>
          )}
        </MainContent>
      </Container>
    </ProfileContainer>
  );
};

export default ProfilePage; 