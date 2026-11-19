import type { StudentRecord } from '../types/smartattend';

/**
 * Official Crescent College student roster (42 students).
 * Exact spelling preserved verbatim; deterministic IDs prevent duplicate records.
 */
export const CRESCENT_COLLEGE_STUDENT_NAMES: readonly string[] = [
  'ABDUL AJEEM M',
  'ABDUR RAHMAAN Z',
  'ADNAN ABUBAKAR S',
  'AFRIN S N',
  'AFRIN THASNEEM A',
  'AHILAN S',
  'AL SABUR AHAMED S',
  'ANZAR AHMED K',
  'CHANDRU S',
  'JASMINE H',
  'JASRIN HUMAIRA R',
  'KABILAN K',
  'KALAISELVI A',
  'KHALEEL FARIH A',
  'KISHOR AKASH P',
  'MAHMOOD S A K',
  'MANOJ V',
  'MD ABDUL RAHIM S',
  'MOHAMED ADNAN S',
  'MOHAMED FARRIS M',
  'MOHAMED RAIYAN',
  'MOHAMED SALAHUDEEN S',
  'MOHAMED UMAR M A',
  'MOHAMMED AAQIL S K',
  'MOHAMMED ABDULAZIZ',
  'NEHAA S',
  'NITEESH S',
  'PARAMASIVAM E',
  'PAVITHRA R',
  'PRATHEEBAN A',
  'RAYEES AHMED A',
  'SAKETHA M',
  'SANJAY R',
  'SASVINI K',
  'SELVAMANIKANDAN B',
  'SHAHIN NISHA',
  'SHOBANA V',
  'SUHAIL RASHIK S',
  'SUMAN D',
  'YASIN SARIF S',
  'YOUSUF PATHAN S',
  'YUSUF FAHUMI',
] as const;

export function buildCrescentStudentRecords(timestampIso: string): StudentRecord[] {
  return CRESCENT_COLLEGE_STUDENT_NAMES.map((fullName, idx) => {
    const seq = String(idx + 1).padStart(3, '0');
    const rollSeq = String(idx + 1).padStart(2, '0');
    const registerNo = `CRES24CSE${seq}`;
    return {
      id: `stu-crescent-${seq}`,
      admissionNo: `ADM-CRES-${seq}`,
      registerNo,
      rollNo: `CR${rollSeq}`,
      fullName,
      department: 'CSE',
      academicYear: '2nd Year',
      section: 'A',
      email: `${registerNo.toLowerCase()}@crescent.edu`,
      phone: '',
      photoDataUrl: null,
      enrollmentStatus: 'ACTIVE',
      biometricConsentGranted: false,
      biometricConsentAt: null,
      biometricRevokedAt: null,
      faceEnrollmentStatus: 'NOT_ENROLLED',
      createdAt: timestampIso,
      updatedAt: timestampIso,
    };
  });
}
