import React from 'react';
import { View, Text, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const customers = [
  {
    id: 1,
    name: 'John Doe',
    subtitle: 'Software Engineer',
    // image: require('./images/john-doe.png'),
    image: ''
  },
  {
    id: 2,
    name: 'Jane Doe',
    subtitle: 'Product Manager',
    // image: require('./images/jane-doe.png'),
    image: ''
  },
];

const CustomerDropdown = () => {
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);

  return (
    <View>
      <DropDownPicker
        items={customers.map((customer) => ({
          label: customer.name,
          value: customer.id,
          icon: () => (
            <Image
              source={customer.image}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          ),
        }))}
        defaultValue={selectedCustomer}
        containerStyle={{ height: 40 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setSelectedCustomer(item.value)}
      />
      {selectedCustomer && (
        <View>
          <Image
            source={customers[selectedCustomer - 1].image}
            style={{ width: 100, height: 100 }}
          />
          <Text>{customers[selectedCustomer - 1].name}</Text>
          <Text>{customers[selectedCustomer - 1].subtitle}</Text>
        </View>
      )}
    </View>
  );
};

export default CustomerDropdown;
