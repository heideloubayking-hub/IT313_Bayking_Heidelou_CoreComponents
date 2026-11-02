import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  ScrollView, 
  Pressable, 
  SafeAreaView 
} from 'react-native';

// 1. Separate StudentCard Component (Requirement 1 & 2)
function StudentCard({ id, name, year, photoUrl, flagged, onToggleFlag }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.avatar} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable 
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged ? styles.flaggedActive : styles.flaggedInactive,
          pressed && { opacity: 0.7 }
        ]}
      >
        <Text style={flagged ? styles.flagTextActive : styles.flagTextInactive}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

// 2. Parent StudentDirectory Component (Requirement 3, 4, 5)
export default function StudentDirectory() {
  const [query, setQuery] = useState("");
  const [students, setStudents] = useState([
    { id: "s1", name: "Ana Cruz", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=1", flagged: true },
    { id: "s2", name: "Bea Santos", year: "2nd Year", photoUrl: "https://i.pravatar.cc/100?img=2", flagged: false },
    { id: "s3", name: "Cid Ramos", year: "4th Year", photoUrl: "https://i.pravatar.cc/100?img=3", flagged: false },
    { id: "s4", name: "Dex Alonzo", year: "1st Year", photoUrl: "https://i.pravatar.cc/100?img=4", flagged: false },
    { id: "s5", name: "Eli Tan", year: "3rd Year", photoUrl: "https://i.pravatar.cc/100?img=5", flagged: false },
  ]);

  const handleToggleFlag = (id: string) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, flagged: !student.flagged } : student
      )
    );
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        <Text style={styles.headerSubtitle}>{students.length} students this term</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search students..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredStudents.map(student => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={handleToggleFlag}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingHorizontal: 16, paddingTop: 40 },
  header: { marginBottom: 16 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
  headerSubtitle: { fontSize: 14, color: '#666', marginTop: 2 },
  searchBar: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 16, marginBottom: 16 },
  scrollContainer: { paddingBottom: 20 },
  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: 12, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#E2E8F0' },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#CCC' },
  infoContainer: { flex: 1, marginLeft: 12 },
  name: { fontSize: 16, fontWeight: '600', color: '#1A1A1A' },
  year: { fontSize: 13, color: '#666', marginTop: 2 },
  flagButton: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1 },
  flaggedActive: { backgroundColor: '#D97706', borderColor: '#D97706' },
  flaggedInactive: { backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' },
  flagTextActive: { color: '#FFFFFF', fontSize: 13, fontWeight: '600' },
  flagTextInactive: { color: '#475569', fontSize: 13, fontWeight: '600' },
});