import { useState } from "react";

interface MedicalRecord {
  id: string;
  patientId: string;
  diagnosis: string;
  treatment: string;
}

export const useMedicalRecords = () => {
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  const addMedicalRecord = (record: Omit<MedicalRecord, "id">) => {
    const newRecord = { ...record, id: Date.now().toString() };
    setMedicalRecords([...medicalRecords, newRecord]);
  };

  return { medicalRecords, addMedicalRecord };
};
