
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.studentImage}
      />

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{name}</Text>
        <Text style={styles.studentYear}>{year}</Text>
        <Text style={styles.studentId}>Student ID: {id}</Text>

        <Pressable
          onPress={onToggleFlag}
          style={({ pressed }) => [
            styles.flagButton,
            flagged && styles.flaggedButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.flagButtonText}>
            {flagged ? 'Remove Flag' : 'Flag for Advising'}
          </Text>
        </Pressable>

        {flagged && (
          <Text style={styles.flaggedText}>
            This student is flagged for advising.
          </Text>
        )}
      </View>
    </View>
  );
}

function StudentDirectory() {
  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/150?img=47',
      flagged: false,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      year: '2nd Year',
      photoUrl: 'https://i.pravatar.cc/150?img=44',
      flagged: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      year: '4th Year',
      photoUrl: 'https://i.pravatar.cc/150?img=12',
      flagged: false,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      year: '1st Year',
      photoUrl: 'https://i.pravatar.cc/150?img=13',
      flagged: false,
    },
    {
      id: 's5',
      name: 'Eli Tan',
      year: '3rd Year',
      photoUrl: 'https://i.pravatar.cc/150?img=14',
      flagged: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFlag = (studentId) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === studentId
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Directory</Text>

      <Text style={styles.subtitle}>
        Search and manage student advising records
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name or year..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text style={styles.resultText}>
        Students found: {filteredStudents.length}
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
              photoUrl={student.photoUrl}
              flagged={student.flagged}
              onToggleFlag={() => toggleFlag(student.id)}
            />
          ))
        ) : (
          <Text style={styles.noResults}>
            No students found.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

export default StudentDirectory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FA',
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    marginBottom: 12,
  },
  resultText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },
  studentImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#E2E8F0',
  },
  studentInfo: {
    flex: 1,
    marginLeft: 14,
  },
  studentName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  studentYear: {
    fontSize: 14,
    color: '#2563EB',
    marginTop: 3,
  },
  studentId: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 3,
  },
  flagButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 7,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  flaggedButton: {
    backgroundColor: '#64748B',
  },
  pressedButton: {
    opacity: 0.6,
  },
  flagButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  flaggedText: {
    color: '#DC2626',
    fontSize: 11,
    marginTop: 6,
  },
  noResults: {
    textAlign: 'center',
    color: '#64748B',
    marginTop: 30,
    fontSize: 16,
  },
}); 
