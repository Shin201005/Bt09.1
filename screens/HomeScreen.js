import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SectionHorizontalList from '../components/SectionHorizontalList';
import { categories, popularItems, saleItems } from '../data/mockData';

export default function HomeScreen() {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryEmoji}>{item.image}</Text>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.foodCard}>
      <View style={styles.foodImagePlaceholder}>
        <Text style={styles.foodImageText}>🍽️</Text>
      </View>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodCountry}>{item.country}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
    </View>
  );

  const renderSaleItem = ({ item }) => (
    <View style={styles.foodCard}>
      <View style={styles.saleBadge}>
        <Text style={styles.saleBadgeText}>{item.sale}</Text>
      </View>
      <View style={styles.foodImagePlaceholder}>
        <Text style={styles.foodImageText}>🥗</Text>
      </View>
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.foodCountry}>{item.country}</Text>
      <Text style={styles.foodPrice}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenTitle}>Explorer</Text>

        <View style={styles.searchRow}>
          <View style={styles.locationBox}>
            <Ionicons name="location-outline" size={20} color="#555" />
          </View>

          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search for meals or area"
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
            <Ionicons name="search-outline" size={22} color="#333" />
          </View>
        </View>

        <SectionHorizontalList
          title="Top Categories"
          actionText="Filter"
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
        />

        <SectionHorizontalList
          title="Popular Items"
          actionText="View all"
          data={popularItems}
          renderItem={renderPopularItem}
          keyExtractor={(item) => item.id}
        />

        <SectionHorizontalList
          title="Sale-off Items"
          actionText="View all"
          data={saleItems}
          renderItem={renderSaleItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 18,
    color: '#222',
  },
  searchRow: {
    flexDirection: 'row',
    gap: 10,
  },
  locationBox: {
    width: 46,
    height: 46,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4e4e4',
  },
  searchBox: {
    flex: 1,
    height: 46,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e4e4e4',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    color: '#222',
  },
  categoryCard: {
    width: 110,
    marginRight: 12,
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 42,
    marginBottom: 8,
    backgroundColor: '#fff',
    width: 100,
    height: 72,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingTop: 10,
  },
  categoryName: {
    marginTop: 6,
    fontWeight: '500',
    color: '#333',
  },
  foodCard: {
    width: 170,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#ececec',
    position: 'relative',
  },
  foodImagePlaceholder: {
    height: 100,
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodImageText: {
    fontSize: 36,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  foodCountry: {
    color: '#777',
    marginTop: 2,
    marginBottom: 8,
  },
  foodPrice: {
    fontWeight: '700',
    fontSize: 16,
    color: '#222',
  },
  saleBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: '#ff3b30',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  saleBadgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
});