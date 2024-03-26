/*const [
  Abdominal Pain, Adult
Abdominal Pain, Child
Abdominal Swelling
Abrasions
Alcohol Problems
Allergic Reaction
Altered Mental Status (AMS)
Ankle Injury
Ankle Problems
Anxiety
Appetite Loss, Adult
Appetite Loss, Child
Arm or Hand Problems
Asthma
Avian Influenza (“Bird Flu”) Exposure
Back/Neck Injury
Back Pain
Bad Breath
Bedbug Exposure or Concerns
Bed-Wetting
Bee Stings
Bites, Animal/Human
Bites, Insect
Bites, Marine Animal
Bites, Snake
Bites, Tick
Bleeding, Severe
Blood/Body Fluid Exposure
Bone, Joint, and Tissue Injury
Breast-Feeding Problems
Breast Problems
Breathing Problems
Bruising
Burns, Chemical
Burns, Electrical
Burns, Thermal
Cast/Splint Problems
Chest Pain
Chest Trauma
Chickenpox
Child Abuse
Choking
Circumcision Care
Cold Exposure Problems
Common Cold Symptoms
Confusion
Congestion
Congestive Heart Failure
Constipation
Contact Lens Problems
Contraception, Emergency (EC)
Cough
Croup
Crying, Excessive, in Infants
Dehydration
Depression
Diabetes Problems
Diaper Rash
Diarrhea, Adult
Diarrhea, Child
Dizziness
Domestic Abuse
Drowning (Near Drowning)
Earache, Drainage
Ear Injury, Foreign Body
Ear Ringing
Ebola: Known or Suspected Exposure
Electric Injury
Extremity Injury
Eye Injury
Eye Problems
Facial Problems
Facial Skin Problems
Fainting
Falls
Fatigue
Feeding Tube Problems
Fever, Adult
Fever, Child
Finger and Toe Problems
Food Allergy, Known or Suspected
Food Poisoning, Suspected
Foot Problems
Foreign Body, Eye
Foreign Body, Inhaled
Foreign Body, Nose
Foreign Body, Rectum
Foreign Body, Skin
Foreign Body, Swallowing of
Foreign Body, Vagina
Frostbite
Gas/Belching
Gas/Flatulence
Genital Lesions
Genital Problems, Male
Glands, Swollen or Tender
Hair Loss
Hand/Wrist Problems
Hay Fever Problems
Headache
Head Injury
Hearing Loss
Heartburn
Heart Rate Problems
Heat Exposure Problems
Hemorrhoids
Hepatitis
Hiccups
Hip Pain/Injury
Hives
HIV Exposure
Hoarseness
Hospice Problems
Hypertension
Hyperventilation
Hypotension
Immunization, Tetanus
Immunization Reactions
Impetigo
Incontinence, Stool
Incontinence, Urine
Indigestion
Influenza
Insomnia
Intravenous Therapy Problems
Itching
Jaundice
Jaw Pain
Joint Pain/Swelling
Knee Pain/Swelling/Injury
Laceration
Leg Pain/Swelling
Lice
Menstrual Problems
Mouth Problems
Mumps
Muscle Cramps
Neck Pain
Neurologic Symptoms
Newborn Problems
Nosebleed
Nose Injury
Numbness and Tingling
Ostomy Problems
Overdose
Pertussis (Whooping Cough)
Piercing/Pocketing Problems
Pinkeye
Pinworms
Poisoning, Suspected
Postoperative Problems
Postpartum Problems
Pregnancy, Cold Symptoms
Pregnancy, Fetal Movement Problems
Pregnancy, Hypertension
Pregnancy, Leaking Vaginal Fluid
Pregnancy, Nausea and Vomiting
Pregnancy Problems
Pregnancy, Suspected Labor
Pregnancy, Suspected Labor < 36 Weeks
Pregnancy, Urination Problems
Pregnancy, Vaginal Bleeding
Puncture Wound
Rash, Adult
Rash, Child
Rectal Bleeding
Rectal Problems
Reye Syndrome, Suspected
Roseola
Rubella (German Measles)
Rubeola (Measles)
Scabies
Scrotal Problems
Seizure
Seizure, Febrile
Severe Acute Respiratory Syndrome (SARS)
Sexual Assault
Sexually Transmitted Disease (STD)
Shingles: Suspected or Exposure
Shock, Suspected
Shoulder Pain/Injury
Sickle Cell Disease Problems
Sinus Problems
Skin Lesions: Lumps, Bumps, and Sores
Sleep Apnea, Adult
Sleep Apnea, Infant
Sore Throat
Speaking Difficulty
Spitting Up, Infant
Stools, Abnormal
Stye
Substance Abuse, Use, or Exposure
Suicide Attempt, Threat
Sunburn
Swallowing Difficulty
Sweating, Excessive
Swelling
Swine Flu (H1N1 Virus) Exposure
Tattoo Problems
Teething
Tongue Problems
Toothache
Tooth Injury
Umbilical Cord Care
Urinary Catheter/Nephrostomy Tube Problems
Urination, Difficult
Urination, Excessive
Urination, Painful
Urine, Abnormal Color
Vaginal Bleeding
Vaginal Discharge/Pain/Itching
Vision Problems
Vomiting, Adult
Vomiting, Child
Weakness
West Nile Virus
Wheezing
Wound Care: Sutures or Staples
Wound Healing and Infection
]*/

const bodySystem = {
  'Neurologic & Head Problems': {
    'Altered Mental Status (AMS)': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause If Known', 'Medications', 'Prior History' ],
      otherProtocolstoConsider: [ 'Alcohol Problems', 'Breathing Problems (101)', 'Chest Pain (118)', 'Confusion (142)', 'Dehydration (173)', 'Diabetes Problems (180)', 'Dizziness (192)', 'Fainting (228)', 'Fever, Adult (241)', 'Child (244)', 'Headache (303)', 'Heart Rate Problems (317)', 'Seizure (530)', 'Seizure Febrile (533)', 'Substance Abuse, Use, or Exposure (581)', 'Urination, Difficult' ],
      nurseAlert: 'Signs of altered mental status may include: confusion; irritability; less responsive to voice or touch; drowsiness; combative; uncooperative; nonsensical verbalizing; sudden change in behavior, thinking process, or ability to communicate; auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations. • AMS may be one of the first indicators of a UTI, dehydration, or a stroke in the elderly. • In a child, AMS may be one of the first indicators of rapidly progressing meningitis or a head injury after trauma.',
      alertBullets: '',
      assessment: [
        { A: 'Is the following present?',
          list: ['Unconsciousness', 'not breathing'],
          true: 'Call ambulance and begin CPR'
        },
        { B: 'Are any of the following present?',
          list: [ 'Loss of consciousness more than once during the day', 'Unresponsive at the time of the call', 'Drug/alcohol overdose', 'Difficulty breathing', 'AMS and any of the following' = [ 'Severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'diabetic and unresponsive to home care measures', 'pregnancy, vaginal bleeding, or abdominal pain', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body' ], 'Persistent AMS', 'Drowsiness and difficulty in arousing' ],
          true: '“Call ambulance” and “Give person with diabetes and AMS immediate source of sugar” and See Home Care Instructions'
        },
        { C: 'If person arouses easily, are any of the following present?',
          list: [ 'Headache, fever, or stiff and painful neck', 'Recent head injury or trauma', 'New seizure or prolonged postictal state', 'Persistent high fever', 'New onset of auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations or delusions' ],
          true: '“Seek emergency care now”'
        },
        { D: 'Is the following present?',
          list: [ 'Brief episode of loss of consciousness' ],
          true: 'Go to Fainting Protocol (228) “Seek medical care within 2 to 4 hours if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Keep person safely lying down until fully awake and responsive.',
        'Turn person on side if vomiting.',
        'Do not leave person unattended.',
        'If person has diabetes and experiences a sudden change in level of consciousness, give source of sugar immediately but only if person is awake enough to eat or drink. Good sources of sugar include orange juice, flavored drink mixes (such as Kool-Aid), cola, or candy.',
        'If event is alcohol- or drug-related, see also Alcohol Problems protocol and Substance Abuse, Use, or Exposure protocol (581). For future assistance, contact local resources for assistance: counseling, detoxification programs, inpatient/outpatient treatment programs, AA, or Al-Anon.'
      ],
      reportToPCP: [ 'No improvement or condition worsens' ],
      seekEmergencyCare: [ 'Loss of consciousness > 1 time during the day', 'Difficulty breathing', 'AMS and any of the following:', 'severe headache', 'chest pain/discomfort', 'rapid heartbeat', 'severe abdominal pain', 'pain worsens upon sitting or standing', 'child with fever and rigid or flaccid body', 'persistent AMS', 'drowsiness and difficulty in arousing', 'headache, fever, or stiff and painful neck' ]
    },
    'Confusion': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', 'Altered Mental Status (29)', 'Fever, Adult (241), Child (244)', 'Headache (303)', 'Seizure (530)', 'Seizure, Febrile (533)', 'Substance Abuse, Use or Exposure (581)' ],
      nurseAlert: 'Signs of confusion may include irritability, less responsive to voice or touch, drowsiness, combative, uncooperative, nonsensical verbalizing, sudden change in behavior, thinking process, or ability to communicate, auditory (voices, buzzing, clicks), sensory (bug crawling), or visual hallucinations.',
      alertBullets: [ 'In the elderly, confusion may be one of the first indicators of a UTI, dehydration, or a stroke.', 'In a child, confusion may be one of the first indicators of rapidly progressing meningitis or a head injury after trauma.' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'History of recent head trauma', 'Exposure to chemicals or drug ingestion', 'Diabetes', 'History of stroke, high blood pressure, or cardiac disease', 'Disorientation to name, date, place, or situation', 'Fruity breath', 'Flushing or dry skin', 'Severe vomiting', 'Temperature > 102°F (38.9°C)', 'Stiff neck, severe headache, rigidity', 'Sudden weakness on one side of body', 'Facial drooping on one side with smile', 'Difficulty speaking', 'Sudden change in vision', 'Pale, diaphoretic, and light-headed or weak', 'Ill child and sudden change in behavior; combative, uncooperative, nonsensical verbalizing' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [  'New onset of hallucinations or paranoia', 'History of drug or alcohol abuse', 'Temperature > 101°F (38.3°C) in a child, the elderly,or immunosuppressed', 'Seizure disorder' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Currently taking medications known to cause confusion', 'Recently taking a new medication', 'Temperature > 101°F (38.3°C)', 'History of dementia or chronic brain syndrome and change in mental status', 'Recent abrupt cessation of drugs (OTC or prescription), alcohol, or caffeine' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'History of dementia or chronic brain syndrome and no change in status' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        },
      ],
      homeCareInstructions: [ 'If taking medications that can cause delirium (antihistamines, belladonna, alkaloids), discontinue use and call back or call PCP if no improvement within 1 hour.', 'Keep person comfortable in a well-lighted room in familiar surroundings and with someone in attendance.', 'Give usual medication for fever (such as acetaminophen). Give cool baths to reduce fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'Persistent confusion > 1 hour', 'Persistent confusion after fever is controlled', 'Other symptoms are present after delirium clears' ],
      seekEmergencyCare: ['Severe headache or stiff neck or rigidity', 'Sudden weakness on one side of body', 'Difficulty speaking', 'Pale, diaphoretic, and light-headed or weak', 'Hallucination, paranoia, or suicidal threat or attempt', 'Ill child and sudden change in behavior', 'Severe vomiting', 'Fruity breath', 'Flushing or dry skin' ]
    },
    'Dizziness': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History', 'Medications' ],
      otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Chest Pain (118)', 'Confusion (142)', 'Dehydration (173)', 'Earache and Drainage (200)', 'Fainting (228)', 'Falls (231)', 'Headache (303)', 'Heart Rate Problems (317)', 'Heat-Exposure Problems (320)', 'Hypertension (347)', 'Hyperventilation (350)', 'Neurologic Symptoms (420)', 'Rectal Bleeding (510)', 'Substance Abuse, Use, and Exposure (581)', 'Weakness (645)' ],
      nurseAlert: 'Dizziness can be a minor symptom caused by inadequate fluid or food intake, heat or sun exposure, or standing up too quickly. It may also be an indication of a serious condition related to an infectious process, cardiovascular, respiratory, gastrointestinal, or neurologic disorder. Dizziness may be described as light-headedness, feeling faint, fuzzy, woozy, or a sensation of motion by the person or the environment such as spinning or whirling.',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Is chest pain present?',
          list: [ '' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          B: 'In addition to the dizziness, are any of the following present?',
          list: [ 'Sudden onset of weakness or numbness in the face, arms, or legs on one side of the body', 'Difficulty speaking or walking, confusion, facial droop', 'Fainting spells or loss of consciousness', 'Heart rate < 50 or > 130 bpm or irregular heart rhythm', 'Persistent severe headache or change in vision', 'Fever, pale skin, and weakness' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'History of recent trauma or blow to the head < 48 hours ago', 'Recent history of severe vomiting, diarrhea, or bleeding and dizziness and pulse increase when sitting or standing', 'History of diabetes ' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Earache, ringing in the ears, or loss of hearing', 'Fever unresponsive to fever-reducing measures', 'Persistent light-headedness > 3 days', 'Recent abrupt cessation of drugs (OTC or prescription), alcohol, or caffeine' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Dizziness interferes with activities', 'History of dieting, and dizziness does not improve after eating', 'Dizziness occurs after taking a new medication', 'Increase in stress', 'Dizziness occurs during or after drinking alcohol', 'Dizziness occurs when moving the head' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'During the dizzy spell, reach out and touch something, then lie flat or sit with head down on your lap and take deep breaths for a few minutes.', 'If dizziness is accompanied by anxiety, rapid breathing, and numbness in the face or fingers, breathe into a paper bag for 5 to 10 minutes, making sure the mouth and nose are covered by the bag.', 'Sit up or stand up slowly. Avoid sudden changes in posture.', 'If diagnosed with labyrinthitis, consider having someone else provide transportation. Dizziness can take up to 4 weeks to resolve after starting treatment.', 'In the case of persistent dizziness, avoid noisy environments.', 'Limit intake of caffeinated beverages and alcohol.', 'If dehydrated, drink plenty of water or sports drinks.', 'Use a night light.', 'Consider OTC motion sickness medications (Benadryl, Bonine) if dizziness is related to motion, and follow the instructions on the label.', 'If dizziness caused by Ménière disease, reinforce the importance of restricting salt intake.', 'When feeling a “dizzy attack” coming on, stop moving for a few minutes. Reach out and lightly touch something solid and firm, then sit down and stay still.' ],
      reportToPCP: [ 'Problem persists > 1 week or worsens', 'Persistent vomiting and dizziness' ],
      seekEmergencyCare: [ 'Chest pain', 'Decrease in level of consciousness', 'Weakness or difficulty speaking', 'Heart rate < 50 or > 130 bpm or irregular heart rhythm' ]
    },
    'Facial Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Congestion (145)',  'Facial Skin Problems (225)',  'Mouth Problems (410)',  'Numbness and Tingling (433)',  'Piercing Problems (446)',  'Rash, Adult (501), Child (505)',  'Sinus Problems (556)',  'Shingles: Suspected or Exposure (545)',  'Skin Lesions: Lumps, Bumps, and Sores (559)',  'Tattoo Problems (602)',  'Toothache (611).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'History of glaucoma', 'Sudden onset of facial drooping on one side' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Sudden severe pain interferes with activity', 'Facial paralysis', 'Pain, swelling, redness, warmth, drainage, or fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Increased pain in afternoon or when bending over', 'Green, brown, or yellow nasal discharge', 'Pain along ridge between nose and lower eyelid', 'Temperature > 101°F (38.3°C)', 'Persistent swelling', 'Facial rash, blisters, or lesions' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Recent red, blistered facial rash', 'Pain, swelling, or bruising after blow to the face', 'History of recent cold', 'Pain follows ingestion of ice-cold foods or fluids', 'Nose and eye drainage' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Alternate cold and warm compresses to forehead and cheeks 1 minute each for 10 minutes, 4 times a day. A sock filled with rice and heated in the microwave works well.', 'Increase fluid intake.', 'Apply ice pack to face injury for 10 to 20 minutes, 4 times a day for first 24 hours to help reduce swelling.', 'Sit in a steamy bathroom for 20 minutes several times a day to promote sinus drainage.', 'Take OTC decongestants as needed for congestion and follow instructions on the label. Ask your pharmacist for product suggestions.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort and fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ 'Persistent pain or condition worsens', 'Temperature > 101°F (38.3°C)', 'Signs of infection: pain, swelling, redness, warmth, drainage, or red streaks', 'Persistent nasal discharge', 'Change in vision, hearing, smell, or taste' ],
      seekEmergencyCare: [ 'Sudden loss of vision', 'Severe pain on one side of face, over eye, blurred vision, and red eye', 'Adult with shoulder, chest, neck, or arm pain', 'Sudden facial drooping on one side of the face' ]
    },
    'Fainting': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Additional Injuries', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', 'Confusion (142)', 'Diabetes Problems (180)', 'Dizziness (192)', 'Heart Rate Problems (317)', 'Heat-Exposure Problems (320)', 'Pregnancy Problems (481)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Is the person still unconscious or has slow, irregular, or noisy breathing?',
          list: [ '' ],
          true: 'Call ambulance'
        },
        {
          B: 'Is chest, jaw, neck, shoulder, or arm pain present?',
          list: [ '' ],
          true: 'Go to Chest Pain protocol (118)'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Loss of consciousness > 1-2 minutes', 'Loss of movement in arms or legs, confusion, difficulty speaking, numbness or tingling, or blurred vision', 'History of recent head injury', 'History of heart problems or diabetes', 'Irregular or rapid heartbeat', 'Severe headache', 'Severe back or abdominal pain', 'Recent bloody or black tarry stools', 'Shortness of breath' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Signs of dehydration: infrequent urination, dark yellow urine, sunken eyes, poor skin elasticity, excessive thirst, dry mouth or mucous membranes', 'Continued light-headedness or dizziness' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          E: ' Are any of the following present?',
          list: [ 'Person is older than 50 years and faintness occurs after turning head or looking up', 'Pregnancy or LMP > 6 weeks ago' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          F: 'In addition to light-headedness, are any of the following present?',
          list: [ 'Several hours of exposure to the sun or a hot', 'environment', 'Prolonged period of time since eating', 'Feeling faint after suddenly standing from a lying, sitting, or bending position', 'Recent onset of an emotional event', 'Feeling faint after strenuous exercise', 'Faintness after prolonged standing in one spot', 'New blood pressure medication', 'Faintness occurred after a period of rapid breathing and numbness in hands, toes, or face' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' For faintness, raise legs higher than the head or sit and lower head between the knees until sensation passes.', 'If there has been prolonged exposure to heat, sip cool fluids and apply cold compresses to cool the body.', 'Avoid sudden posture changes: slowly stand from a lying, sitting, or bending position.', 'If the person has diabetes, check blood sugar and take appropriate action. For low blood sugar, drink a glass of orange juice, cola, or milk.', 'Eat frequent small protein snacks. Eat a well-balanced, sensible, weight reduction diet if overweight.', 'Avoid prolonged standing in one position. Shift weight from foot to foot. Walk around if possible.' ],
      reportToPCP: [ 'Frequent episodes of light-headedness', 'New blood pressure medication and faintness persists', 'Condition persists or worsens', 'New-onset, bloody or black tarry stools', 'Possibility of pregnancy' ],
      seekEmergencyCare: [ 'Chest, jaw, neck, shoulder, or arm pain', 'Severe headache', 'Severe back or abdominal pain', 'Fainting recurs', 'Shortness of breath' ]
    },
    'Headache': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'History of Migraines or Known Aneurysms', 'Medications', 'Pain Scale', 'History. See Head Injury protocol if recent trauma or injury to the head' ],
      otherProtocolstoConsider: [ 'Alcohol Problems (22)', ' Congestion (145)', ' HeadInjury (307)', ' Hypertension (347)', ' Neck Pain (417)', ' NeurologicSymptoms (420)', ' Sinus Problems (556)', ' Toothache (611)', ' VisionProblems (635)' ],
      nurseAlert: 'There are many conditions that cause headaches; some can be potentially life-threatening. Error on the side of caution when triaging callers with a headache. Headache: Causes and Characteristics: Appendix T (698) is provided to help the nurse gain a better understanding of the many conditions causing headaches. It is NOT to be used to try and diagnose a caller\'s condition.',
      alertBullets: [ 'Be on the alert for signs of meningitis: headache, stiff neck, fever, petechial rash, vomiting, irritability, altered mental status.', 'Be on the alert for signs of a stroke: headache, weakness on one side of the body, facial drooping, difficulty talking or walking, vision changes.' ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ 'Sudden severe pain or “worst headache ever”', 'Sudden onset of weakness, unsteady gait, numbness, and/or tingling on one side of the body', 'Confusion, difficulty in arousing, acting differently', 'Sudden onset of difficulty speaking or slurred speech', 'Stiff neck and fever (pain bending head forward)', 'Blurred or double vision', 'Purple or blood-colored flat spots or dots on skin', 'Child with diabetes and blood glucose is high' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Persistent vomiting', 'History of high blood pressure and light-headedness', 'Fever > 103°F (39.4°C) and unresponsive to feverreducing measures', 'Eye pain with redness and decreased vision', 'Recent tick bite, headache, rash, and flulike symptoms', 'New onset of severe persistent pain', 'Change in ability to walk' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Persistent migraine unresponsive to usual migraine treatment', 'Migraine intensity or character different from past migraines', 'Persistent headache > 12 hours and no other symptoms', 'Pain interferes with activity', 'Pain in temporal areas and age > 50 years' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Congestion', 'Fever and sore throat', 'Muscles and joints ache', 'Recent stressful event', 'History of allergies', 'Dull and constant pain with tender and tight neck muscles', 'Recently stopped drinking coffee, eating chocolate, or smoking', 'Severe dieting and weight loss', 'Dental problems' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Apply cool compresses or ice pack to forehead every 2 hours.', 'Rest in a quiet darkened room.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Reduce fever with usual fever-reducing measures.', 'For known migraine:', 'take medication as directed by PCP', 'rest with head elevated', 'apply heat to back of neck', 'apply cool compresses to forehead', 'consider avoiding chocolate, milk products, cheddar and blue cheeses, cured pork, caffeine, monosodium glutamate (MSG), and red wine', 'If nasal congestion is present, breathe steam for 10 to 20 minutes, 4 times a day or use a vaporizer.', 'Keep a migraine journal and take it to next appointment. Try to identify triggers.' ],
      reportToPCP: [ 'Headache persists > 24 hours', 'No improvement or pain worsens', 'Fever is present', 'Thick green or yellow nasal discharge', 'High blood glucose if you have diabetes', 'Persistent vomiting' ],
      seekEmergencyCare: [ 'Sudden onset of weakness, numbness, or tingling on one side of the body', 'Fever, stiff neck', 'Confusion, severe drowsiness, or difficulty speaking', 'Purple or blood-colored flat spots or dots appear on skin', 'Change in ability to walk' ]
    },
    'Head Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Mechanism of Injury', 'Medications', 'Associated Symptoms', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Back/Neck Injury (56)', 'Confusion (142)', 'Falls (231)', 'Headache (303)', 'Vomiting, Adult (638), Child (641)' ],
      nurseAlert: '',
      alertBullets: [ 'A neck injury should always be considered whenever there is a head injury. Assess for weakness, incoordination, numbness, neck pain.', 'Altered mental status may be one of the first signs of a head injury after trauma particularly in a child or the elderly.' ],
      assessment: [
        {
          A: 'After a blow or injury to the head, are any of the following present?',
          list: [ 'Difficulty moving arms or legs, weakness, incoordination, or slurred speech', 'Severe neck pain' ],
          true: 'Call ambulance and do not attempt to move the person'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Abnormal breathing or difficulty in breathing', 'Altered mental status, difficulty in arousing, confusion, agitation', 'Uncontrolled bleeding', 'Seizure activity', 'Preverbal children do not recognize parents or caregiver', 'Persistent visual disturbance', 'Persistent vomiting', 'Persistent headache', 'Numbness or tingling in arm or leg' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Persistent blood or fluid draining from the nose or ears', 'Gaping, split, jagged, or deep wound', 'Laceration', 'Bruising behind the ears or under the eyes', 'Persistent bleeding > 10 minutes', 'History of loss of consciousness', 'Change in behavior since the injury', 'Fall > 2 feet in a child younger than 1 year', 'Presently or recently taking blood-thinning medication' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Child younger than 1 year with a soft spongy swollen area over the skull for > 12 hours' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: ' Are any of the following present?',
          list: [ ' Swollen area (goose egg) on the forehead or scalp', 'Intermittent headache not responsive to pain medication' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Apply ice packs or cold compresses to area for 20 minutes every 2 hours to reduce swelling and discomfort. Place a cloth barrier between the ice and the skin.', 'Allow a child to sleep after an injury. Awaken every 2 hours for 24 hours to determine level of alertness and responsiveness.', 'Avoid heavy activity during first 24 hours after the injury. Rest in a quiet area with head slightly elevated.', 'Take acetaminophen for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid aspirin and ibuprofen.', 'Avoid alcohol, sleeping pills, or sedatives during the first 24 hours after the injury.', 'Avoid heavy meals.' ],
      reportToPCP: [ 'No improvement or condition worsens', 'Persistent headache', 'Persistent swelling > 24 hours after ice pack application', 'Blood or clear drainage from nose or ears' ],
      seekEmergencyCare: [ 'Confusion, disorientation, agitation, or change in vision', 'Altered mental status or difficulty arousing', 'Numbness, tingling, or weakness in an arm or leg', 'Persistent vomiting, severe headache, speech problems, seizures, or lethargy', 'Child does not recognize parents or caregiver', 'Persistent numbness and tingling' ]
    },
    'Insomnia': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Alcohol Problems (22)', 'Anxiety (37)', 'Depression (177)', 'Heartburn (313)', 'Substance Abuse, Use, or Exposure (581)', 'Suicide Attempt, Threat (584).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: ' Is the following present?',
          list: [ 'Suicidal ideation' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent pain, itching, coughing, or fever that interferes with sleep and is unresponsive to home care measures', 'Persistent depression, anxiety, or stress' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Persistent difficulty sleeping > 7 days', 'Consistently unable to sleep > 2-3 hours', 'Requesting medication for sleep', 'Urinary or bowel problems that frequently interrupt sleep', 'Problem interferes with work, school, or other daily activity', 'Ingestion of caffeine products', 'Intermittent episodes lasting 3–5 days', 'Recent withdrawal from drugs or alcohol', 'Prescribed sleep medication ineffective', 'Taking a new medication', 'Ingestion of OTC products', 'Feeling overwhelmed' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Increase daily exercise. Avoid strenuous exercise 2 to 3 hours before bedtime. Do gentle stretching exercises for 10 minutes before retiring.', 'Read non-work-related materials or listen to soothing music at bedtime.', 'Avoid caffeine and other stimulants 11 hours before bedtime.', 'Take a warm bath or shower 2 hours before retiring.', 'Drink warm milk before bed.', 'Drink 8 ounces of orange juice before bedtime if alcoholic beverages have been consumed earlier; this helps to speed the breakdown of alcohol and reduces reawakening after a few hours of sleep.', 'Try relaxation techniques, such as deep breathing exercises or visualizing flower-filled meadows.', 'Identify stress factors and try to reduce them. If awakening prompts worry about things to be done, devise a plan of action, list the items, and try to go back to sleep.', 'Avoid eating 3 hours before bedtime. Sip 1 tbsp of apple cider vinegar diluted with water or juice 30 minutes after dinner to help speed gastric flow through the stomach and reduce gastric reflux.', 'If difficulty sleeping is due to gastric reflux, sleep lying on the left side as tolerated to help speed stomach emptying and prevent reflux into the esophagus.', 'If stress, anxiety, or depression interferes with sleep, seek help from a local counseling center or mental health services.', 'Consider taking Benadryl or melatonin on a short-term basis. Follow the instructions on the label.', 'If taking supplements, choose energizing supplements like B-complex vitamins in the morning and soothing minerals such as calcium and magnesium at night.', 'Plug in a red, blue, or green nightlight to avoid turning on bright lights to use the restroom at night.', 'Keep the bedroom dark, cool, and quiet. Use a fan or other appliance to block noise.', 'Wear loose-fitting nightclothes.', 'Call back immediately if feeling overwhelmed.' ],
      reportToPCP: [ 'No improvement with home care measures or problem worsens', 'Problem interferes with work, school, or other daily activity', 'Feeling overwhelmed' ],
      seekEmergencyCare: [ 'Suicidal ideation' ]
    },
    'Neurologic Symptoms': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Back/Neck Injury (56)', 'Confusion (142)', 'Dizziness (192)', 'Falls (231)', 'Headache (303)', 'Head Injury (307)', 'Numbness and Tingling (433)', 'Vision Problems (635)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ 'Sudden changes in vision, weakness, numbness, speech, or mental status may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.', 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: 'Did any of the following symptoms suddenly occur?',
          list: [ 'Numbness or weakness in face, arm, or leg on one side of the body', 'Unexplained dizziness or falls', 'Difficulty breathing', 'Altered mental status', 'Inability to stand, walk, or bear weight', 'Difficulty speaking', 'Facial drooping on one side', 'Difficulty swallowing', 'Unable to move a limb', 'Visual changes', 'Sudden, severe headache', 'Recent history of head trauma and elevated blood pressure' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Transient focal neurologic deficits that completely resolve within hours', 'New and sudden onset of bladder or bowel incontinence', 'New onset of back pain and numbness to groin or rectal area', 'Unable to urinate and bladder full', 'Headache worse than prior headaches', 'Low blood glucose and weakness, confusion, dizziness, headache, tremors, or vision problems, and unresponsive to usual home remedies' ],
          true: 'Seek medical care immediately'
        },
        {
          C: 'Is the following present?',
          list: [ 'Tremors and history of heavy alcohol use' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Poor attention span', 'Transient tingling in hands or feet', 'New onset of tremors and no history of diabetes, alcohol abuse, Parkinson disease, or seizures' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Provide reassurance that foot or hand tingling after prolonged sitting or pressure to the area will resolve with movement and stretching.', 'Avoid crossing legs at the knees or ankles.', 'Avoid smoking.', 'Take medications as prescribed.', 'Avoid driving or operating machinery when experiencing transient symptoms.', 'Take fall precautions. Remove safety hazards. Place bell or other communication device within reach of person to summon help before trying to get up.' ],
      reportToPCP: [ 'Weakness or numbness in the face, arms, or legs', 'Difficulty understanding', 'Persistent vision changes', 'Persistent dizziness', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ 'Weakness on one side of the body', 'Unexplained dizziness or falls', 'Difficulty breathing', 'Altered mental status', 'Inability to stand, walk, or bear weight', 'Difficulty speaking or swallowing', 'Facial drooping on one side', 'Unable to move a limb', 'Severe headache', 'Visual changes' ]
    },
    'Numbness and Tingling': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Location', 'Associated Symptoms', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', 'Arm or Hand Problems (46)', 'Back/Neck Injury (56)', 'Back Pain (59)', 'Chest Pain (118)', 'Headache (303)', 'Head Injury (307)', 'Hyperventilation (350)', 'Neurologic Symptoms (420)', 'Weakness (645)' ],
      nurseAlert: '',
      alertBullets: [ 'Sudden changes in vision, weakness, numbness, speech, or mental status may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.', 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Confusion', 'Change in mental status' ],
          true: 'Go to Altered Mental Status protocol (29)'
        },
        {
          B: 'Is the following present?',
          list: [ 'Severe headache' ],
          true: 'Go to Headache protocol (303)'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'One side of the body affected', 'Sudden weakness in arms and/or legs', 'Difficulty speaking, slurred speech', 'Blurred vision', 'Loss of bladder or bowel control', 'Fingers or toes are cold or blue compared with other fingers or toes', 'Headache prior to onset of symptoms', 'Chest pain' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' History of recent heavy lifting or strenuous exercise', 'Area painful, swollen, and/or warm', 'Severe pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ 'Numbness, tingling, and/or a sharp pain in the hand or arm at night', 'History of recent illness or surgery', 'Gradual onset', 'Stiff or painful neck and no known injury', 'Diagnosed carpal tunnel and worsening symptoms', 'Pregnant' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          F: 'Are any of the following present?',
          list: [ 'Symptoms followed prolonged sitting or lying in one position', 'Rapid breathing, dizziness, and hands, face, or lips affected' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid sitting in one position for long periods of time.', 'Periodically tighten and release muscles in affected area to stimulate circulation.', 'Protect numb area from injury.', 'To slow rapid breathing and control numbness and tingling, see next page.', 'Avoid repetitive motions; take breaks and do stretching exercises.', 'Apply heat or cold to stiff neck.', 'Sit down and focus on slowing breathing, one breath every 5 seconds.', 'Cover mouth and nose with a paper bag and breathe in and out 10 times.', 'If no improvement, continue breathing in the bag for 5 to 15 minutes.', 'Breathe without the bag for a few minutes.', 'Repeat breathing with and without the bag until condition improves.' ],
      reportToPCP: [ 'No improvement in 20 to 30 minutes or condition worsens', 'Symptoms interfere with daily activities' ],
      seekEmergencyCare: [ 'Change in mental status', 'Sudden weakness on one side of body', 'Difficulty speaking or slurred speech', 'Loss of bowel or bladder control', 'Chest pain', 'Vision changes', 'Fingers or toes are blue' ]
    },
    'Seizure': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History of Seizures', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Alcohol Problems (22)', 'Altered Mental Status (29)', 'Confusion (142)', 'Fever, Adult (241), Child (244)', 'Head Injury (307)', 'Seizure, Febrile (533)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Multiple seizures', 'Difficulty breathing', 'Seizure lasts > 5 minutes', 'Severe headache', 'Persistent unusual lethargy', 'History of recent head injury', 'History of recent drug ingestion', 'First-time seizure', 'Pregnancy' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Injury during seizure', 'History of habitual heavy alcohol or drug use and recently quit drinking or taking drugs', 'High fever', 'Frequent seizures while on seizure medication' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Stopped taking seizure medication', 'History of diabetes, cerebrovascular accident, cancer, or cardiovascular or neuromuscular disease' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Is the following present?',
          list: [ 'History of seizures and alert and oriented after waking up from the seizure' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Protect the Airway' = [ 'Lay the victim on side or stomach with the head turned toward the side to prevent choking on secretions or vomit.', 'If there is noisy breathing, pull the jaw and chin forward. Do not put your fingers, medication, or any other object in the seizing person\'s mouth.', 'Loosen tie or other restrictive clothing.' ],
        'Protect From Injury' = [ 'Move the seizing person to a safe area away from objects that could cause injury.', 'Protect the head from hitting a hard surface.', 'Do not try to hold the person and restrict movement. Allow the seizure to run its course.' ],
        'Postictal Phase' = [ 'Expect the person to sleep approximately 30 minutes after the seizure and slowly awaken.', 'Do not allow person to drive after a seizure.', 'Do not give anything by mouth until fully awake.' ],
        'Reduce High Fever After the Seizure' = [ 'Remove clothing and sponge with cool water.', 'Apply cool compresses to the forehead, face, and neck.', 'Give acetaminophen for fever. Use acetaminophen suppositories if person is still groggy. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ]
      ],
      reportToPCP: [ 'Repeated seizure activity', 'No improvement or condition worsens', 'Fever unresponsive to fever-reducing measures after a seizure' ],
      seekEmergencyCare: [ 'Difficulty breathing', 'Severe headache, stiff or painful neck', 'Persistent confusion' ]
    },
    'Seizure, Febrile': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'History of Seizures', 'Temperature (if known)', 'Does Child Feel Hot', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Altered Mental Status (29)', ' Confusion (142)', ' Fever, Adult (241), Child (244)', ' Head Injury (307)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Multiple seizures', 'Difficulty breathing or breathing stopped > 60 seconds', 'Seizure lasts > 5 minutes' ],
          true: 'Call ambulance and Begin rescue breathing if child is not breathing'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' First-time seizure', 'Child younger than 6 months or older than 5 years of age', 'Severe headache, stiff or painful neck' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Persistent temperature > 102°F (38.9°C) that is unresponsive to fever-reducing measures' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Alert and oriented after seizure', 'Child wants to sleep after seizure but can be aroused without irritability' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [
        'Protect the Airway' = [ 'Lay the victim on side or stomach with the head turned toward the side to prevent choking on secretions or vomit.', 'If there is any noisy breathing, pull the jaw and chin forward. Do not put your fingers, medication, or any other object in the seizing person’s mouth.', 'Loosen clothing.' ],
        'Protect From Injury' = [ 'Move the seizing person to a safe area away from objects that could cause injury.', 'Protect the head from hitting a hard surface.', 'Do not try to hold the person and restrict movement. Allow the seizure to run its course.' ],
        'Postictal Phase' = [ 'Expect drowsiness. Allow rest in a cool room. Lightly dress the victim in undergarments.', 'Do not give anything by mouth until fully awake.' ],
        'Reduce High Fever After the Seizure' = [ 'Remove clothing and sponge with cool water. Stop the bath if shivering occurs.', 'Apply cold compresses to the forehead, face, neck, and underarms.', 'Give acetaminophen for fever and follow instructions on the label. Use acetaminophen suppositories if drowsiness persists. Give every 4 hours if fever persists, even during the night, until fever < 100°F (37.8°C). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Do not bathe with alcohol rubs.' ],
      ],
      reportToPCP: [ 'Repeated seizure activity', 'No improvement or condition worsens', 'Fever unresponsive to fever-reducing measures' ],
      seekEmergencyCare: [ 'Difficulty breathing or breathing stops > 60 seconds', 'Seizure lasts > 5 minutes', 'Face, lips, or nails turn blue', 'Injury occurs during seizure', 'Persistent confusion', 'Severe headache, stiff or painful neck' ]
    },
    'Sinus Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'Prior Sinus', 'Problems', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Breathing Problems (101)', 'Common Cold Symptoms (138)', 'Congestion (145)', 'Cough (163)', 'Earache, Drainage (200)', 'Facial Pain (222)', 'Fever, Adult (241), Child (244)', 'Headache (303)', 'Sore Throat (567)' ],
      nurseAlert: 'Use the protocol if history of sinus problems or under current treatment for a sinus condition.',
      alertBullets: [ '' ],
      assessment: [
        {
          B: 'Are any of the following present?',
          list: [ 'Redness and swelling in cheek, forehead, or eyelid', 'Vision change' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent fever and sinus congestion or facial pain > 2–3 days', 'Yellow or green nasal discharge > 3–5 days', 'Persistent dull ache or tenderness around eyes or cheekbones', 'No improvement after 48 hours of antibiotic therapy', 'Pain worsens when bending over' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Some sinus discomfort and clear nasal discharge', 'Recent cold', 'History of allergies', 'Postnasal drainage', 'Chronic cough' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Use a vaporizer or humidifier to keep air moist, especially at night, and change the water daily.', 'Breathe steam several times a day to help promote sinus drainage. Sit in a steam-filled bathroom for 10 to 20 minutes or cover head with a towel and breathe steam from a tea kettle or basin filled with hot water.', 'Apply hot packs to area around the eyes and cheekbones. Diabetics should use heat with caution.', 'Take OTC decongestant of choice, and follow instructions on the label. If hypertensive or pregnant, such medications may not be appropriate. Check label on container before taking such medications.', 'For nasal congestion, use saline nose drops or spray.', 'For postnasal drainage, may try phenylephrine (Neo-Synephrine) or oroxymetazoline nasal (Afrin) nose drops for as long as 3 days. Then discontinue use. Prolonged use may worsen congestion when use of spray is discontinued. Do not take if cardiac disease, hypertension, or prostate problems are present.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) as tolerated for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present.', 'Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Avoid dairy products.', 'Drink at least six 8-ounce glasses of liquids a day, unless on fluidrestriction diet.' ],
      reportToPCP: [ 'Yellow or green nasal discharge for > 3 to 5 days', 'No improvement after 48 hours of antibiotic therapy', 'Redness and swelling in cheek, forehead, or eyelid', 'No improvement after 5 days or condition worsens' ],
      seekEmergencyCare: [ '' ]
    },
    'Speaking Difficulty': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Anxiety (37)', 'Asthma (49)', 'Breathing Problems (101)', 'Confusion (142)', 'Headache (303)', 'Mouth Problems (410)', 'Neurologic Symptoms (420)', 'Piercing Problems (446)', 'Sore Throat (567)', 'Tongue Problems (608)' ],
      nurseAlert: ': Sudden changes in vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or spinal cord and reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.',
      alertBullets: [ 'Ask how current condition is different from normal.' ],
      assessment: [
        {
          A: ' In addition to difficulty speaking, are any of the following present?',
          list: [ 'Weakness on one side of body', 'Difficulty breathing', 'Difficulty swallowing', 'Severe headache', 'Confusion/disorientation', 'New onset and history of blood clots or heart problems', 'Words or ideas are mixed up', 'Trauma to the neck' ],
          true: 'Call ambulance'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Numbness or weakness', 'Frequent or intermittent episodes of difficulty speaking', 'Inability to move muscles on one side of face', 'History of recent injury or trauma', 'Dizziness or light-headedness', 'Blurred vision', 'New onset and unable to start sentences without repeating first word or unable to start a sentence when ready to speak' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Is the following present?',
          list: [ 'Pain in mouth or face' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Under medical care for problem and condition is worsening', 'Increased stress level', 'Taking a new OTC or prescribed medication', 'Poor attention span', 'New onset of stuttering in child', 'Parent concerned' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Speak slowly while facing the person and give short, simple directions.', 'Do not rush the person; allow ample time for a response.', 'Use paper and pencil to communicate as necessary.', 'Person with a diagnosed speech problem may show frustration through swearing, yelling, or acting out. Be patient, positive, and nonjudgmental. Do not take the person’s actions personally.', 'Encourage and allow for as much independent behavior as possible.', 'Decrease the stress level through relaxation, exercise, or taking a break from stressors.' ],
      reportToPCP: [ 'Condition persists or worsens, and cause of the problem is unknown', 'Numbness or weakness', 'Dizziness or light-headedness', 'Blurred vision' ],
      seekEmergencyCare: [ ' Weakness on one side of the body', 'Difficulty breathing', 'Difficulty swallowing', 'Confusion or disorientation', 'Severe headache' ]
    },
  },
  Eyes: {
    'Contact Lens Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Type of Contact', 'Pain Scale', 'Medications' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Vision Problems (635)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ 'Sudden loss of vision', 'Severe pain', 'Penetrating injury (such as hard lens embedded in the surface of the eye)', 'Severe pain after insertion of lenses that were not properly cleaned and rinsed before insertion' ],
          true: 'Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ 'Hard lens broken in eye', 'Persistent pain that is unresponsive to home care', 'Blurred or changed vision ' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Puslike drainage from eye', 'No improvement or condition worsens after home care treatment', 'Inability to remove contact lens', 'Persistent sensation of a foreign body in the eye', 'Severe sensitivity to light' ],
          true: 'Seek medical care within 12 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ 'Discomfort', 'Eyes red or swollen and no change in vision', 'Scratchy sensation', 'Frequent tearing' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ '**Wash hands thoroughly before any eye care.', 'To remove hard contact lens:', 'Penlight or magnification is helpful.', 'Eyelid may need to be turned inside out.', 'Place several drops of saline in eye.', 'Move lens with gentle pressure through the eyelid.', 'To remove soft contact lens:', 'Place several drops of saline in the eye.', 'Gently move lens to white part of the eye.', 'Grasp lens with thumb and forefinger and remove.', 'Gently irrigate affected eye with saline or water for 10 to 20 minutes.', 'Rest eyes in a darkened room. Apply cold compresses or ice packs to eyes to reduce swelling.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen) to relieve discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Begin wearing lenses for limited periods of time 1 week after the problem is resolved or as directed by provider.', 'For eye drainage, apply warm compresses to eyes for 10 minutes several times a day. Use separate towels and wash cloths for other family members. Do not wear contact lenses when eye drainage is present. Wash hands frequently.', 'Avoid rubbing or scratching eyes.', 'Check contact lens for tears or irregularities.', 'Sterilize contact lenses thoroughly before reinserting them after infection resolves.' ],
      reportToPCP: [ 'Persistent redness or irritation to eyes', 'Puslike drainage or frequent tearing', 'Light sensitivity', 'No improvement or condition worsens', 'Inability to remove lens' ],
      seekEmergencyCare: [ 'Sudden loss of vision', 'Severe pain to one or both eyes' ]
    },
    'Eye Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Contact Lens Wearer', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Burns, Chemical (107)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Head Injury (307)', 'Piercing Problems (446)', 'Vision Problems (635)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Laceration or penetrating injury to the eye or eyelid', 'Blow to the eye and sudden loss of vision', 'Bulging eyeball', 'Clear jellylike discharge from injured eye', 'Blunt trauma to the eye', 'Pupils of unequal size', 'Blood in the colored part of the eye', 'Persistent severe pain', 'Exposure to acid such as battery acid or caustic substance (drain cleaner, lye)' ],
          true: 'Seek emergency care now and for chemical exposure, flush eye with cold running water and Follow Home Care Instructions'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Swelling, pain, and tearing > 30 minutes', 'Exposure to a strong light, such as a welder\'s arc or sun lamp', 'Injury caused by hot water, chemical, or foreign body and pain persists after home care treatment or white part of eye becomes cloudy', 'Persistent blurred or double vision' ],
          true: 'Seek medical care within 2 hours and for chemical exposure, flush eye with cold running water and Follow Home Care Instructions'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Discomfort or irritation persists 24 hours after the injury or removal of a foreign body', 'Signs of infection develop after an injury: pain, swelling, redness, drainage, or fever' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Area surrounding the eye is black and blue', 'Blood on white part of the eye for > 3 days' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Chemicals in the eye: Immediately flush eye with cold running water for 20 to 30 minutes. Tilt head under running water with injured eye down. While holding eyelids apart, allow water to run across the inner eye to the outer part of the eye.', 'Do not rub eye.', 'Apply ice pack or cool compresses to reduce swelling for the first 24 hours.', 'Take acetaminophen for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ ' Increased pain, swelling, drainage, or fever', 'Changes in vision', 'No improvement in pain after 48 hours', 'Bruising around the eye or bleeding persists > 2 weeks', 'White part of eye becomes cloudy' ],
      seekEmergencyCare: [ ' Any bleeding or jellylike discharge from the eye', 'Sudden change in vision', 'Persistent severe pain' ]
    },
    'Eye Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Neurologic Symptoms (420)', 'Stye (579)', 'Vision Problem (635). If injury or foreign body, see Eye Injury (216) or Foreign Body, Eye (261)' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Sudden or severe pain', 'Sudden vision loss or blurred or double vision', 'Sudden onset of pupils of unequal size', 'Curtain over field of vision', 'Sudden increase in floaters', 'Flashes of light', 'Halos or rainbows around light', 'Blood in the colored part of the eye', 'Redness and unable to open eye or keep it open', 'Fever, light sensitivity, bilateral swelling, and redness' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Pain, redness, watering, eye drainage, and wears contact lenses', 'Pain increases with pressure to the eye or eye movement', 'Lesion on the eyeball or corner of the eye', 'Eye swollen shut' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain unresponsive to home care measures', 'Persistent itching, redness, burning, and drainage', 'Persistent pain after removing contact lenses and irrigating eyes', 'Swollen neck, lymph nodes, and redness around the entire eye', 'Stye returns or bleeds', 'Stye located on bottom eyelid near the nose is unresponsive to home care', 'Eye pain or drainage and fever > 100.5°F', 'Excessive persistent tearing of eye' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Blood in the white part of the eye > 3 days', 'History of eye pain late in the day', 'History of wearing contact lenses too long or improper cleaning', 'Tear duct area swollen and painful', 'Small red, swollen, tender area on upper or lower lid', 'Exposure to smoke, fumes, smog, pool water, known allergens, or sun lamp', 'Eyes dry and itching', 'Eyes crusted closed in the morning' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If drainage is present, encourage family members to use separate towels and washcloths. Eye infections are highly contagious.', 'Avoid rubbing or touching eyes.', 'Clean crusting or discharge with cotton ball moistened in warm water. Discard cotton ball after use. Do not use same cotton ball for both eyes. Wash your hands after cleaning.', 'Apply warm compresses to eyes for 15 to 20 minutes, 4 times a day.', 'Wash hands frequently.', 'Instill saline drops in dry itchy eyes.', 'Avoid wearing contact lenses for several days until the problem is resolved.', 'For styes: See Home Care Instructions in Stye protocol (579).' ],
      reportToPCP: [ ' Condition persists or worsens after 48 hours', 'Yellow or green discharge', 'Fever', 'Sores', 'Red and swollen eyelids' ],
      seekEmergencyCare: [ 'Severe pain', 'Sudden loss of vision or blurred or double vision', 'Sudden onset of unequal pupil size', 'Blood in colored part of the eye', 'Redness and unable to open eye or keep it open', 'Fever, light sensitivity, bilateral swelling, and redness' ]
    },
    'Foreign Body, Eye': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Vision Problems (635)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Object is embedded in the eyeball', 'Severe pain after irrigating chemical substance from eye', 'Sudden change in vision', 'Bulging eyeball', 'Blood in the colored part of the eye', 'Clear jelly-like discharge from injured eye', 'Severe pain after foreign body removed', 'Unequal pupil size' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Foreign object is over the colored part of the eye', 'Swelling, pain, or tearing > 30 minutes', 'Injury caused by hot water, chemical, or foreign body, and pain persists after home care treatment', 'Unable to remove free-floating foreign body' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Discomfort or irritation persists 24 hours after the injury or removal of a foreign body', 'Signs of infection develop after an injury: pain, swelling, redness, drainage, or fever', 'Unable to remove contact lens' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ '**  Chemicals in the Eye: Immediately flush eye with cold running water for 20 to 30 minutes. Tilt head under running water with the injured eye down. While holding eyelids apart, allow water to run across the inner eye to the outer part of the eye.', 'Do not try to remove', 'foreign body embedded in the eye', 'metal chip', 'foreign body over the colored part of the eye', 'Foreign Body Removal (lint, specks of dirt, eyelashes):', 'Pull down the lower lid and remove the particle with the corner of a moistened handkerchief, tissue, or cotton-tipped swab.', 'Pull down the upper lid over the lower lid and hold in place for a moment. Release and look to see if object is visible; if so, remove it.', 'Do not rub eye.', 'Apply ice pack or cool compresses to reduce discomfort.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen). Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label. ' ],
      reportToPCP: [ ' Increased pain, swelling, drainage, or fever', 'Changes in vision', 'No improvement in pain after 48 hours', 'Unable to remove free-floating foreign body' ],
      seekEmergencyCare: [ null ]
    },
    'Pinkeye': {
      keyQuestions: [ ' Name', 'Age', 'Onset', 'Cause', 'Eye Appears Pink or Red', 'History', 'Medications', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Contact Lens Problem (155)', 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Vision Problems (635)' ],
      nurseAlert: 'Use this protocol if previously diagnosed with pinkeye, known or suspected exposure to someone with pinkeye, and eye appears pink or red. Pinkeye is highly contagious.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Injury to the eye', 'Foreign body in the eye' ],
          true: 'Go to Eye Injury protocol (216) or Foreign Body, Eye protocol (261)'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'History of glaucoma', 'Abdominal pain or nausea', 'Unable to move eye', 'Partial loss of field of vision' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Red swollen eyelids', 'Ulcer or gray-white sore on eyeball', 'Severe pain', 'Flashes of light', 'Age younger than 5 years and severe redness or swelling around eye' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Persistent blinking, tearing with pain', 'Yellow/green eye discharge', 'Eyelids slightly puffy with red rims', 'Blurred vision', 'Sensitivity to light', 'History of previous eye infections', 'Eyelids stuck together upon awakening', 'Redness > 7 days', 'Exposure to welders or ultraviolet light', 'Earache on same side as pinkeye' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ ' Blood in the white part of the eye with no change in vision', 'Cold symptoms: congestion, earache, sore throat, or cough', 'Exposure to environmental irritants: smog, smoke, pool water, shampoo, onions, household cleaning products, or jalapeño peppers', 'History of hay fever or allergies, and eye itching', 'Clear eye discharge' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rinse eyes frequently with warm water, every 1 to 2 hours when awake. Use a soft warm moist cloth to remove crusting and drainage.', 'If exposed to chemical irritants, rinse eyes with warm water for 5 minutes.', 'Apply alternating warm and cold compresses to eyes for 10 minutes every 2 hours for 24 hours.', 'Do not share towels or linens with other household members.', 'To control itching, try Benadryl for 24 to 48 hours. Follow instructions on the label.', 'Encourage children to avoid touching eyes and to wash hands frequently.' ],
      reportToPCP: [ 'Red swollen eyelids', 'Ulcer or gray-white sore on eyeball', 'Severe pain', 'Flashes of light', 'Persistent blinking, tearing, or pain', 'Persistent eye drainage' ],
      seekEmergencyCare: [ ' Unable to move eye', 'Abdominal pain or nausea' ]
    },
    'Vision Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Eye Injury (216)', 'Eye Problems (219)', 'Foreign Body, Eye (261)', 'Neurologic Symptoms (420)' ],
      nurseAlert: null,
      alertBullets: [ 'If eye injury or foreign body to the eye, use Eye Injury (216) or Foreign Body, Eye (261) protocols.', 'Sudden changes in vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Sudden onset of severe eye pain', 'Sudden loss of partial or total vision in one or both eyes', 'Blood or pus in colored part of eye', 'Pupils of unequal size', 'History of recent head injury and vision changes', 'Sudden or gradual increase in number of floaters, light flashes, or curtain over field of vision' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Sudden onset of blurred or double vision and eye pain', 'Pain increases with pressure to the eye or eye movement', 'Age > 50 years and recent or present temporal pain/ache', 'Signs of an eye infection: pain, redness, swelling, drainage, or fever' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Increased sensitivity to light', 'History of flashing lights followed by a headache', 'New and sudden onset of flashing lights (has not', 'curred in the past) preceded by a headache', 'Persistent blurred or double vision', 'Change in vision after a change in medication' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Progressive blurred vision and older than 50 years', 'Intermittent episodes of blurred vision', 'Difficulty seeing distant objects', 'Difficulty reading', 'Eyes dry and itching' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If drainage is present and eye infection is suspected, encourage family members to use separate towels and washcloths.', 'Avoid rubbing or touching eyes. Wash hands frequently.', 'Clean crusting or discharge with a cotton ball moistened in warm water. Discard cotton ball after use. Do not use the same cotton ball for both eyes.', 'Instill saline drops in dry, itchy eyes.', 'Make an appointment to have eyes checked for difficulty seeing close or distant objects.' ],
      reportToPCP: [ 'Sudden changes in vision', 'Signs of infection', 'Condition persists or worsens' ],
      seekEmergencyCare: [ ' Sudden onset of severe eye pain', 'Sudden loss of partial or total vision in one or both eyes', 'Pupils of unequal size', 'Sudden or gradual increase in number of floaters, light flashes, or curtain over field of vision' ]
    },
  },
  Ears: {
    'Earache, Drainage': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Common Cold Symptoms (138)', 'Crying, Excessive, in Infants (169)', 'Ear Injury, Foreign Body (203)', 'Fever, Adult (241), Child (244)', 'Hearing Loss (310)', 'Piercing Problems (446)', 'Sore Throat (567).' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Earache, stiff neck, and fever' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Swelling, pain, and redness on one side of the face', 'Traumatic blow to the ear followed by severe pain, loss of hearing, bruising behind the ear, bleeding in the ear canal, or significant swelling', 'Severe pain unresponsive to pain medication', 'History of diabetes or immunosuppression', 'Ear deviated outward', 'Tenderness of bone behind ear' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Sudden hearing loss and pain, ear drainage, or dizziness', 'Bloody or clear drainage (different from usual ear wax)', 'Swelling, pain, warmth, drainage, or fever', 'Increased pain when moving or touching the ear', 'Blisters or sores', 'Fever, congestion, or sore throat', 'Light-headedness' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Unable to remove wax plug with medication and pain or decreased hearing', 'Sunburned ears', 'Pain after exposure to cold', 'Muffled hearing but no pain', 'Pain after swimming or exposure to water', 'Itching', 'Sudden pain with cracking or popping noise, decreased hearing and congestion', 'Ringing in the ears', 'Taking antibiotics for ear infection > 3 days and earache persists' ],
          true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Do not instill liquid drops in the ear if pain is related to an injury or a ruptured eardrum is suspected (sudden pain, hearing loss, bleeding or discharge, ringing in the ears, dizziness).', 'Apply cool compresses to sunburned ears or ice packs to swollen area caused by a blow to the ear.', 'To remove excessive ear wax, use Debrox (carbamide peroxide) as directed for as long as 3 days, or use two drops of mineral oil in the affected ear twice a day for 2 days.', 'Apply warm compresses for ear pain for 15 to 20 minutes, 4 times a day, until resolved or while waiting for appointment. Fill a sock half full of rice. Knot the end. Microwave the sock until warm and apply against the ear. Check temperature against inner wrist before applying to the ear.', 'Avoid swimming until ear pain and drainage subside.', 'Swimmer\'s ear prevention: Mix equal parts of white vinegar and rubbing alcohol. Instill five drops of the mixture in each ear before and after swimming.', 'Relieve ear congestion by frequent swallowing, chewing gum, and swallowing with the nose pinched closed.', 'Avoid air travel when an earache or congestion is present. If travel is unavoidable, take a decongestant before flying, and chew gum during takeoff and landing.', 'Take acetaminophen for earache or fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.' ],
      reportToPCP: [ 'No improvement in 3 days or condition worsens', 'Persistent fever unresponsive to fever-reducing measures', 'Vomiting, diarrhea, fatigue, lethargy, or stiff neck', 'Fever or swelling' ],
      seekEmergencyCare: [ 'Earache, stiff neck, fever' ]
    },
    'Ear Injury, Foreign Body': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Earache, Drainage (200)', 'Head Injury (307)', 'Hearing Loss (310)', 'Piercing Problems (446)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'After an injury to the ear, are any of the following present?',
          list: [ 'Loss of coordination', 'Facial paralysis or drooping', 'Whirling vertigo' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Hearing loss', 'Ear canal bleeding', 'Dizziness', 'Recent blow to head and clear or bloody ear canal drainage', 'Unable to remove foreign body or embedded piercing', 'Severe pain', 'Persistent ringing in ear', 'Lacerated earlobe', 'Insect in ear canal', 'Severe swelling of ear lobe', 'Persistent bleeding > 30 minutes' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Persistent pain > 48 hours', 'Earache after a blast of air, noise, or a blow to the head', 'External ear red and swollen', 'Recent use of Q-tips', 'Minor laceration and tetanus immunization > 10 years', 'No improvement after 3 days of home care' ],
          true: [ 'Seek medical care within 24 hours', 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions' ]
        },
      ],
      homeCareInstructions: [ ' Apply ice pack to ear for 20 minutes, 4 times a day, for the first 24 to 48 hours after injury.', 'Point the ear toward the light and pull up on the ear to encourage an insect to crawl out of the ear toward the light.', 'Do not try to remove foreign object if unable to remove by pointing ear down toward the ground and gently shaking the head while pulling up on the ear.', 'Take your usual pain medication (aspirin, acetaminophen, or ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Watch for signs of infection: increased pain, drainage, fever, redness, or warmth.' ],
      reportToPCP: [ 'Signs of infection: increased pain, drainage, fever, redness, or warmth', 'Persistent pain > 48 hours', 'Dizziness', 'Persistent ear canal drainage', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ ' Loss of coordination', 'Facial paralysis or drooping', 'Whirling vertigo' ]
    },
    'Ear Ringing': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Medications', 'History' ],
      otherProtocolstoConsider: [ ' Congestion (145)', 'Dizziness (192)', 'Earache, Drainage (200)', 'Ear Injury, Foreign Body (203)', 'Hearing Loss (310).' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Overdose or frequent ingestion of aspirin or aspirin products' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Foreign body in the ear', 'Severe ear pain unresponsive to home care measures' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Recent ingestion of aspirin or medications containing aspirin, quinine, or streptomycin', 'History of recent head injury or recent ear surgery', 'Dizziness or vertigo', 'Nausea or vomiting', 'Persistent ear pain', 'Ear drainage', 'Persistent hearing loss' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Upper respiratory infection', 'Congestion associated with allergies', 'Feeling of fullness in one or both ears', 'Excessive wax buildup', 'History of Ménière disease with similar symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Take decongestants to relieve ear congestion. Follow instructions on the label. Ask your pharmacist for product suggestions.', 'If taking medications containing aspirin, quinine, or streptomycin, stop taking and notify PCP.', 'Do not poke at wax or try to remove with fingers or cotton swabs. These measures worsen the problem.', 'Decrease use of salt, caffeine, and alcohol if history of Ménière disease is present.' ],
      reportToPCP: [ 'Significant hearing loss or dizziness', 'Ear pain or drainage', 'Persistent vomiting, increased ringing, headache' ],
      seekEmergencyCare: [ null ]
    },
  },
  Nose: {
    'Common Cold Symptoms': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Congestion': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Foreign Body, Nose': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Nosebleed': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Nose Injury': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
  },
  'Throat/Mouth': {
    'Bad Breath': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Diabetes Problems (180)', 'Gas/Belching (282)', 'Indigestion (370)', 'Mouth Problems (410)', 'Swallowing Difficulty (589)', 'Tongue Problems (608)', 'Toothache (611)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Breath smells fruity or ammonia-like', 'Foul odor accompanied by abdominal swelling and pain', 'Fever and sores in the mouth or throat', 'Severe pain in mouth or tongue' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Persistent gum bleeding or swelling', 'Persistent cough with foul-smelling sputum', 'Loose, missing, or decayed teeth', 'Frequent use of cast iron cooking utensils or dishes', 'Recent ingestion of a large dose of vitamins or minerals', 'History of gastrointestinal or chronic lung disease', 'History of chronic allergies or sinus problems ' ],
          true: 'Call PCP or dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Rinse mouth with antiseptic mouthwash, such as Listerine.', 'Brush teeth or dentures, gums, and tongue twice a day and floss regularly.', 'Remove and soak bridges and dentures daily.', 'Decrease dosage of vitamins and mineral supplements if they are believed to be the cause of bad breath.', 'Reduce use of cast iron cooking utensils (unless recommended by physician).', 'Reduce ingestion of garlic, onions, alcohol, or coffee.', 'See dentist regularly and as dental problems occur.' ],
      reportToPCP: [ ' Severe pain or fever', 'No improvement or condition worsens', 'Breath smells like fruit or ammonia' ],
      seekEmergencyCare: [ null ]
    },
    'Foreign Body, Swallowing of': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Object', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11), Child (14)', 'Constipation (152)', 'Diarrhea, Adult (185), Child (188)', 'Piercing Problems (446)', 'Rectal Bleeding (510)', 'Rectal Problems (513)', 'Vomiting, Adult (638), Child (641)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Excessive saliva, drooling, or gagging', 'Difficulty swallowing', 'Coughing, choking, or breathing difficulties', 'Suicide attempt' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Pain or discomfort in throat or chest', 'Abdominal pain', 'Vomiting', 'Object was a battery or sharp object' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Metal object', 'Object size larger than a nickel' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Wood or plastic object', 'Dull glass object (piece of a jar or cup)', 'Object size smaller than a penny', 'Known substance swallowed but no symptoms' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'If no symptoms, try a sip of fluid. If no difficulty, try swallowing bread or soft food.', 'A dull glass object, such as a piece of a jar, cup, or ring, should pass with stools without difficulty in 3 to 4 days.', 'Do not give laxatives. Increase fiber (fruit, vegetables, whole grains) in the diet to help stimulate natural elimination.', 'Check stools for swallowed object.' ],
      reportToPCP: [ ' Intermittent choking or gagging', 'Abdominal pain', 'No evidence of object in stools within 7 days', 'Vomiting', 'Chest pain', 'Fever' ],
      seekEmergencyCare: [ 'Drooling, gagging, choking, or difficulty breathing or swallowing' ]
    },
    'Jaw Pain': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Radiation', 'Associated Symptoms', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Heartburn (313)', 'Indigestion (370)', 'Mouth Problems (410)', 'Neck Pain (417)', 'Toothache (611)', 'Tooth Injury (614)' ],
      nurseAlert: 'There are many conditions that cause jaw pain; some can be potentially life-threatening. Error on the side of caution when triaging callers with jaw pain. Women with jaw, neck, or back pain, nausea, and/or shortness of breath may be experiencing a heart attack.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ ' Chest pain', 'Difficulty breathing' ],
          true: 'Go to Chest Pain protocol (118) or Breathing Problems protocol (101)'
        },
        {
          B: 'Are any of the following present?',
          list: [ ' Intermittent jaw pain and history of hypertension, cardiovascular disease, high cholesterol, obesity, heavy smoker, or age > 30 years', 'New onset and pain radiates to neck, shoulders, or arms' ],
          true: 'Seek emergency care now'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Severe pain', 'Recent trauma to the area', 'Teeth do not align as usual ' ],
          true: 'Seek medical or dental care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Jaw locks in certain positions', 'Signs of infection (increased pain, swelling, drainage, red streaks, or warmth)' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          E: 'Are any of the following present?',
          list: [ ' Pain > 2 weeks', 'Headache, neck, and shoulder pain', 'Clicking, snapping, or popping sound with jaw movement', 'Difficulty opening mouth wide', 'Pain in jaw joint', 'Ear or eye pain', 'Intermittent swelling over the area' ],
          true: 'Call back or call PCP or dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Avoid chewing gum or tough foods.', 'Alternate cold and hot packs to the jaw 6 times a day.', 'Avoid cradling the telephone receiver between the jaw and shoulder.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort and swelling, as tolerated. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Massage muscles around the jaw.' ],
      reportToPCP: [ ' Persistent pain unrelieved by home care measures', 'Condition worsens', 'Signs of infection: increased pain, swelling, drainage, red streaks, warmth, or fever' ],
      seekEmergencyCare: [ 'Chest pain', 'Difficulty breathing', 'New pain radiates to neck, shoulders, or arms' ]
    },
    'Mouth Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Bad Breath (62); Jaw Pain (389)', 'Piercing/Pocketing Problems (446)', 'Skin Lesions: Lumps, Bumps, and Sores (559)', 'Sore Throat (567)', 'Swallowing Difficulty (589)', 'Toothache (611)', 'Tooth Injury (614)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: ' Are any of the following present?',
          list: [ ' Sudden swelling in back of throat or tongue', 'Jaw feels locked in place, inability to open mouth', 'Unable to swallow own saliva' ],
          true: 'Seek emergency care now'
        },
        {
          B: ' Are any of the following present?',
          list: [ ' Penetrating injury to mouth with sharp object', 'Persistent bleeding', 'Severe pain', 'Gaping laceration to lip, tongue, or inside mouth', 'Pain with facial swelling', 'Sensation of bone or food stuck in throat' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: ' Are any of the following present?',
          list: [ 'Fever and mouth sores', 'Blisters', 'White patches on tongue, gums, or inner cheeks', 'General ill feeling', 'Pain with biting, chewing, or opening mouth', 'Persistent mouth pain unresponsive to home care measures', 'History of phenytoin (Dilantin) use', 'Long history of smoking or use of chewing tobacco', 'Foul odor despite regular hygiene', 'Red, swollen, tender gums with fever', 'Difficulty swallowing' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: ' Are any of the following present?',
          list: [ ' History of oral herpes, canker sores, recent viral illness, or new medication', 'Taking large doses of vitamins', 'Red, swollen, tender gums and no fever', 'Sore spot on tongue', 'Poor eating habits or change in diet', 'Recent increase in stress', 'Dental caries' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Iced fluids may soothe mouth sores but will worsen a toothache.', 'Rinse mouth with warm water and ½ tsp salt or baking soda 4 times a day, or rinse with an antiseptic mouthwash.', 'Avoid spicy, citrus, or salty foods until sores are healed.', 'Avoid touching sores.', 'Brush, floss, and rinse teeth and mouth at least twice daily.', 'Take usual pain medication (acetaminophen or ibuprofen) for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Use OTC product containing Orabase to provide protective coating and diminish discomfort.' ],
      reportToPCP: [ ' Mouth lesion persists > 2 weeks', 'Persistent pain or bleeding', 'Signs of infection: pain, swelling, drainage, warmth, or fever', 'Difficulty swallowing', 'No improvement or condition worsens' ],
      seekEmergencyCare: [ ' Sudden swelling in back of throat or tongue', 'Jaw feels locked in place, inability to open mouth', 'Unable to swallow own saliva' ]
    },
    'Sore Throat': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Allergies', 'Medications', 'History', 'Pain Scale', 'Associated Symptoms' ],
      otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Congestion (145)', 'Cough (163)', 'Earache, Drainage (200)', 'Fever, Adult (241), Child (244)', 'Hoarseness (341)', 'Mouth Problems (410)', 'Pregnancy, Cold Symptoms (466)', 'Swallowing Difficulty (589)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Difficulty breathing (for reasons other than nasal congestion)', 'Excessive drooling by a small child', 'Stridor', 'Inability to swallow own saliva', 'Inability to open mouth fully' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'Significant difficulty swallowing because of pain', 'Temperature > 104°F (40°C)', 'Temperature > 101°F (38.3°C) in the elderly or immunosuppressed', 'Signs of dehydration' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' History of rheumatic fever, mitral valve prolapse, or other heart valve problem', 'Skin rash', 'Close contact with someone with strep throat within the past 2 weeks', 'Yellow pus or white mucus at back of throat', 'Red or enlarged tonsils', 'Persistent sore throat > 3 days', 'Ear pain', 'Fever or chills unresponsive to fever-reducing measures', 'Diabetes, elderly, or immunosuppressed', 'Dizziness/faintness', 'Foul-smelling breath' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Nasal congestion', 'Cough or sneezing', 'Feeling of fullness in ear' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take your usual pain medication (acetaminophen, aspirin, ibuprofen) for headache or fever. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Gargle with salt water several times a day for throat discomfort (¼ tsp regular salt to ½ cup warm water) or sip warm chicken broth. Use frozen cough drops or hard candy for additional relief if age > 4 years.', 'Increase fluids; try warm tea with lemon and honey, apple juice, gelatin, or sucking on flavored ice. Take frequent small sips if it is painful to swallow.', 'If you smoke, decrease or stop smoking.', 'Use a vaporizer or humidifier to keep the air moist, especially at night, or put a pot of water near the heat source.', 'Take decongestants to help relieve congestion, unless there is a history of hypertension or pregnancy. Discuss with PCP or pharmacist. ' ],
      reportToPCP: [ ' Fever > 101°F (38.3°C) for several days', 'Sore throat persists > 3 days or worsens', 'Earache', 'No improvement or condition worsens', 'Drooling', 'Signs of dehydration' ],
      seekEmergencyCare: [ ' Unable to swallow own saliva', 'Difficulty breathing/stridor', 'Chest pain', 'Excessive drooling', 'Unable to open mouth fully' ]
    },
    'Swallowing Difficulty': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Foreign Body, Swallowing of (274)', ' Heartburn (313)', ' Neurologic Symptoms (420)', ' Piercing Problems (446)', ' Sore Throat (567)', ' Weakness (645)' ],
      nurseAlert: 'Sudden changes in ability to swallow, vision, speech, or mental status, weakness, and numbness may be signs of a stroke or other serious neurologic disorder. Prompt treatment may prevent extensive damage to the brain or reduce permanent disability. Medications used to break up a clot in the brain need to be administered within 3 hours of symptom onset.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Weakness of neck, chest, and limbs', 'Double or blurred vision, drooling, or drooping eyelids', 'Excessive drooling in small child who appears ill', 'Sudden swelling in face, tongue, or throat or itching, hives, or wheezing', 'Difficulty breathing', 'Pain in jaw, throat, neck, shoulders, chest, or arms', 'Inability to swallow own saliva' ],
          true: 'Call ambulance or Seek emergency care now'
        },
        {
          B: 'Is the following present?',
          list: [ 'Sensation that bone or food is stuck in throat or esophagus' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Is the following present?',
          list: [ 'Unexplained weight loss' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Difficulty swallowing because of sore throat', 'Intermittent chest pain on bending forward or lying down', 'Throat feels tight after swallowing', 'Recent increase in stress' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) as tolerated for fever and discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Gargle with salt water several times a day for throat discomfort. Suck on hard candy or lozenges.', 'Increase fluids. Sip warm tea with lemon and honey.', 'Swallow bread or soft foods, as tolerated.', 'Try OTC antacids, such as Gelusil, Maalox, Mylanta, Riopan, and Tums, and follow instructions on the label.', 'Do not lie down, bend over, or exercise soon after eating.', 'Eat small, frequent meals.', 'Avoid spicy foods, alcohol, coffee, smoking, chocolate, vinegar, fatty foods, and carbonated beverages.' ],
      reportToPCP: [ ' No improvement after 3 days or condition worsens', 'Burping or vomiting blood or dark coffee-grounds-like emesis', 'Excessive drooling', 'Persistent fever unresponsive to home care measures' ],
      seekEmergencyCare: [ ' Weakness of neck, chest, and limbs', 'Double or blurred vision, drooling, or drooping eyelids', 'Excessive drooling in small child who appears ill', 'Sudden swelling in face, tongue, or throat or itching, hives, or wheezing', 'Difficulty breathing', 'Pain in jaw, throat, neck, shoulders, chest, or arms', 'Inability to swallow own saliva' ]
    },
    'Tongue Problems': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'Pain Scale' ],
      otherProtocolstoConsider: [ 'Allergic Reaction (26)', 'Mouth Problems (410)', 'Piercing Problems (446)', 'Sore Throat (567)', 'Swallowing Difficulty (589)', 'Toothache (611)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Sudden onset of tongue swelling and difficulty breathing' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Is the following present?',
          list: [ 'Sudden onset of tongue swelling and no difficulty breathing', 'Pain, swelling, drainage around piercing', 'Gaping laceration from torn piercing' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ 'Pain after taking a new medication', 'Pain on one side of face', 'Persistent hard lump on tongue or mouth', 'Persistent pain and diarrhea with loose, foul-smelling, bulky stools', 'Ulcers, cracks, redness, and persistent pain unresponsive to > 3 days of home care measures', 'Minor tear from piercing and last tetanus shot > 10 years' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Tongue bright red and swollen', 'Red tip and edges', 'Tongue appears hairy', 'Ulcers', 'Sore on one area of tongue', 'Tongue appears black from Pepto-Bismol', 'Irritation from dentures, rough tooth, or braces' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Drink through a straw to minimize discomfort.', 'Note relationship between certain foods and tongue pain and avoid those foods in the diet. Alcohol, hot food or spices, tobacco, chocolate, citrus foods, vinegar, pickles, salted nuts, and chips may irritate the tongue. Milk, gelatin, yogurt, ice cream, and custard are soothing to the tongue.', 'Rinse mouth 4 times a day with a salt or baking soda solution. Add ½ tsp salt or baking soda to 8 ounces of water.', 'If irritation is caused by a rough tooth or braces, contact your dentist.', 'If swelling is related to medication, discontinue use and contact PCP if it is a prescription medication.', 'Increase fluid intake.', 'If irritation is caused by dentures, remove dentures and contact dentist.' ],
      reportToPCP: [ ' No improvement or condition worsens after 3 days of home care measures', 'Pain becomes intolerable', 'Fever, rash, facial swelling' ],
      seekEmergencyCare: [ ' Difficulty breathing', 'Swelling of the back of the mouth' ]
    },
    'Toothache': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History', 'If injury occurred, see Tooth Injury protocol (614)' ],
      otherProtocolstoConsider: [ 'Chest Pain (118)', 'Facial Pain (222)', 'Jaw Pain (389)', 'Mouth Problems (410)', 'Tooth Injury (614)' ],
      nurseAlert: null,
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Is the following present?',
          list: [ 'Gnawing pain in lower teeth and neck, chest, shoulder, or arm' ],
          true: 'Seek emergency care now'
        },
        {
          B: 'Are any of the following present?',
          list: [ 'History of cardiovascular disease or diabetes and jaw pain (no known injury or dental problem)', 'Temperature > 100.4°F (38.0°C) ' ],
          true: 'Seek medical care within 2 hours'
        },
        {
          C: 'Are any of the following present?',
          list: [ ' Persistent pain and swelling over upper or lower jaw', 'Drainage from dental abscess', 'Broken tooth (nontraumatic) ' ],
          true: 'Seek dental care within 24 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ ' Pain interferes with daily activities', 'Red, swollen, bleeding gums', 'Pain when biting food for several days', 'Recent filling and pain for several days', 'History of problems with same tooth (previous break or crack, hot or cold sensitivity)', 'Pain without trauma, fracture, fever, or facial swelling', 'Sores in mouth', 'Tooth loose, chipped, or decayed', 'Pain during or just after eating' ],
          true: 'Call back or call dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ 'Apply ice pack for 20 minutes, 4 times a day, to reduce swelling.', 'Take your usual pain medication (aspirin, acetaminophen, ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rinse mouth with ½ tsp baking soda or salt in a cup of warm water several times a day if sores are present.', 'Brush teeth at least twice a day.', 'Call a dentist for an appointment.' ],
      reportToPCP: [ 'Persistent pain unresponsive to pain medication', 'Facial swelling', 'Fever', 'Drainage from dental abscess' ],
      seekEmergencyCare: [ 'Pain in chest, shoulder, or arms', 'Gnawing pain in lower teeth and neck' ]
    },
    'Tooth Injury': {
      keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Allergies', 'Medications', 'History' ],
      otherProtocolstoConsider: [ 'Back/Neck Injury (56)', 'Jaw Pain (389)', 'Mouth Problems (410)', 'Toothache (611)' ],
      nurseAlert: 'If the tooth has been knocked out, timing is critical since the success rate of reimplantation decreases significantly after 60 minutes. See home care instructions (616) for specific directions to help save the tooth.',
      alertBullets: [ null ],
      assessment: [
        {
          A: 'Are any of the following present?',
          list: [ 'Altered mental status', 'Severe neck pain', 'Numbness or tingling in arms or legs ' ],
          true: 'Call ambulance'
        },
        {
          B: 'Is the following present?',
          list: [ 'Tooth (or teeth) knocked out', 'Tooth or teeth loose and about to fall out', 'Tooth repositioned', 'Unable to stop bleeding with pressure' ],
          true: 'Seek dental or emergency care now and follow home care instructions'
        },
        {
          C: 'After a traumatic injury to teeth, are any of the following present?',
          list: [ 'Severe pain and swelling over affected area', 'Loose tooth or teeth', 'Tooth fractured through crown or to gum line', 'Painful cracked or chipped tooth', 'Frenum tear or laceration', 'Severe jaw pain' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          D: 'Are any of the following present?',
          list: [ 'Lacerated gum, cheek, or lip', 'Painless cracked or chipped tooth' ],
          true: 'Call back or call dentist for appointment if no improvement and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [ ' Find tooth, rinse gently with saliva, milk, or nonchlorinated bottle water and replace in socket as quickly as possible. Do not remove material adhered to tooth. Do not scrub tooth. Bite down on gauze pad or other material to help keep tooth in place.', 'If unable to replace tooth in socket, place tooth in a cup with ¼ tsp salt and 1 cup of milk. May place tooth under tongue if victim is alert and not a young child. Patient must be able to comprehend why it is important to keep tooth segment under the tongue so that there is no chance of swallowing tooth.', 'Bite down on a folded gauze dressing to control bleeding.', 'Call dentist.', 'Take your usual pain medication (acetaminophen, ibuprofen) for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Apply ice to injured gum as tolerated to help control pain.' ],
      reportToPCP: [ 'Persistent bleeding, swelling, or pain' ],
      seekEmergencyCare: [ null ]
    },
  },
  'Back/Neck Problems': {
      'Back/Neck Injury': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Mechanism of Injury', 'Medications', 'Pain Scale', 'History' ],
        otherProtocolstoConsider: [ 'Back Pain (59)', 'Breathing Problems (101)', 'Headache (303)', 'Incontinence, Stool (365), Urine (368)', 'Numbness and Tingling (433)', 'Weakness (645)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: ' Did the injury result from a new traumatic event, and are any of the following present?',
            list: [ 'Difficulty breathing', 'Severe back or neck pain', 'Inability to move fingers or toes', 'Numbness, tingling, or weakness in arms, legs, fingers, or toes', 'Incontinence' ],
            true: 'Call ambulance, support breathing, do not move person and follow emergency home care instructions'
          },
          {
            B: 'Are any of the following present?',
            list: [ 'Traumatic event within past week and the following:', 'Weakness or incontinence', 'Increasing or persistent numbness or tingling' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Age > 65 years History of cancer or bleeding disorder' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ ' Continued mild to moderate neck or back pain unresponsive to rest, heat, ice, and pain medications', 'Mild to moderate neck or back pain and home care measures not initiated' ],
            true: 'Call back or call PCP for appointment if no improvement and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Emergency Instructions' = [ 'Do not move injured person; keep person warm.', 'Apply sandbags, books, rolled magazines, sheets, or towels to both sides of the neck if a neck injury is suspected. Secure with tape from one support, across the forehead, to the opposite support.', 'If the victim is in the water, support the body and neck as one unit until medical help arrives. Positioned at the head of the victim, the rescuer should extend his/her arms under the victim’s head, neck, and shoulders, keeping the back and neck in a straight line. Do not allow the neck to bend forward, backward, or side to side.' ], 'Apply ice packs to affected area for 20 minutes every 2 to 4 hours for as long as 48 hours after injury.', 'After 48 hours, apply heat to the area for discomfort.', 'Take your usual pain medication. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Rest; limit activities until medically evaluated or pain subsides.' ],
        reportToPCP: [ ' Shooting pain into leg, buttocks, or arms Pain worsens No improvement in 3 days' ],
        seekEmergencyCare: [ ' Severe headaches', 'Tingling, weakness, or numbness in the extremities', 'Bowel or urine incontinence' ]
      },
      'Back Pain': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Location', 'Medications', 'Pain Scale', 'History' ],
        otherProtocolstoConsider: [ 'Abdominal Pain, Adult (11); Back/Neck Injury (56); Chest Pain (118); Numbness and Tingling (433); Pregnancy Problems (481); Urination, Painful (626), Abnormal Color (628); Weakness (645)' ],
        nurseAlert: null,
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Are any of the following present?',
            list: [ ' Progressive weakness in legs', 'New sudden onset of numbness or tingling in legs or feet or loss of bladder or bowel control', 'New onset of numbness in groin or rectal area', 'New-onset, rapidly increasing pain, and age >60 years', 'Dizziness, light-headedness, or abdominal fullness', 'Inability to urinate for >8 hours', 'Cool, moist skin', 'Pain radiates to neck, shoulders, jaw, or arm' ],
            true: 'Seek emergency care now, See Back/Neck Injury protocol (56) if recent back injury or traumatic accident has occurred'
          },
          {
            B: 'Are any of the following present?',
            list: [ ' Severe pain with blood in the urine “Seek medical care', 'Difficulty moving legs, feet, or toes', 'Fever with nausea or vomiting in a female', 'Sudden pain after a prolonged period of time in bed or a wheelchair, or if > age 60 years', 'New-onset, rapidly increasing pain, and age < 60 years', 'Pain radiates to groin or genitals' ],
            true: 'Seek medical care immediately'
          },
          {
            C: 'Are any of the following present?',
            list: [ 'Pain radiates to buttocks or limbs', 'Persistent severe pain', 'Frequent urination or pain with urination', 'Some difficulty walking because of discomfort', 'No relief with OTC medications', 'Fever with nausea or vomiting in a male', 'History of trauma > 48 hours', 'History of diabetes, a weakened immune system, or steroid use', 'History of cancer or unexplained weight loss', 'Intravenous drug abuse', 'Pain worse at night or when lying down', 'Blisters or rash and pain in same area', 'Persistent loss of bowel or bladder control', 'Persistent numbness or tingling in legs or feet' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'History of chronic back pain, back problems, back surgery, kidney stones, or renal disease', 'Mild pain without radiation or limited movement', 'Fever with flu-like symptoms' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Restrict to light activities for 2 to 3 days.', 'Use a firm mattress or place a board under a soft mattress.', 'Avoid activities such as prolonged sitting, lifting, or jumping until the pain is resolved (do not stay in bed).', 'Take your usual pain medication for discomfort. Do not give aspirin to a child. Avoid aspirin-like products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'If pain is related to an injury, apply ice packs for the first 24 hours, then moist heat. Use moist heat (shower, tub, or moist hot towels) for 20 to 30 minutes every 2 hours for 48 hours, but only while person is awake.', 'Sleep in a fetal position or on the back with one to two pillows under the knees to help reduce discomfort.', 'For intermittent or chronic back discomfort, use a heating pad on the affected area 20 to 30 minutes every 2 to 4 hours. Do not sleep on a heating pad. Do not apply heating pad directly to the skin without a cloth barrier between heating pad and skin.' ],
        reportToPCP: [ ' No improvement in 3 days', 'Pain worsens', 'Pain radiates into a limb, groin, or genitals', 'Painful urination, frequent urination, fever, or blood in the urine' ],
        seekEmergencyCare: [ ' New onset of persistent numbness or tingling in legs or feet, or loss of bowel or bladder control, or inability to urinate for > 8 hours', 'Weakness in the limbs', 'New-onset cool, moist skin, or pain radiates to neck, shoulders, jaw, or arm' ]
      },
      'Neck Pain': {
        keyQuestions: [ 'Name', 'Age', 'Onset', 'Cause', 'Associated Symptoms', 'Medications', 'History', 'Pain Scale' ],
        otherProtocolstoConsider: [ 'Back/Neck Injury (56)', 'Chest Pain (118)', 'Glands, Swollen or Tender (292)', 'Jaw Pain (389)', 'Mumps (413)', 'Numbness and Tingling (433)' ],
        nurseAlert: 'There are many conditions that can cause neck pain. When neck pain is associated with several other symptoms, triage with caution and note signs that may be an indication of a more serious condition such as meningitis (pain bending head forward, headache, fever, vomiting, confusion, photophobia) or a heart attack (chest, neck, back or jaw pain, sweating, palpitations, nausea, and/or vomiting).',
        alertBullets: [ null ],
        assessment: [
          {
            A: 'Is neck pain related to an injury?',
            list: [ null ],
            true: 'Got to Back/Neck Injury protocol (56)'
          },
          {
            B: ' Is chest pain present?',
            list: [ null ],
            true: 'Got to Chest Pain protocol (118)'
          },
          {
            C: 'Sudden onset of pain, and are any of the following present?',
            list: [ 'History of cardiac disease or angina', 'Jaw pain', 'Sweating, palpitations, nausea, and/or vomiting', 'Difficulty breathing', 'Pain worsens when head is bent toward chest and any of the following:' = [ 'confusion/drowsiness', 'severe headache', 'light sensitivity', 'fever', 'purple or blood-colored rash'], 'Numbness, tingling, weakness in both arms or legs', 'Changes in bowel or bladder control', 'Head involuntarily turns to side' ],
            true: 'Seek emergency care now'
          },
          {
            D: 'Are any of the following present?',
            list: [ 'Weakness or numbness in one arm', 'Signs of infection: pain, swelling, redness, drainage, warmth, or red streaks', 'Fever > 103°F (39.4°C)', 'Fever > 101°F (38.3°C) and history of diabetes, elderly, immunosuppressed, or IV drug abuse', 'Swollen, painful lymph nodes > 1″ (2.5 cm)', 'Swollen, painful nodes and difficulty swallowing' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            E: 'Are any of the following present?',
            list: [ 'Rash', 'Sore throat associated with neck pain', 'Pain interferes with sleep or activity', 'Swelling on one or both sides of the neck' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            F: 'Are any of the following present?',
            list: [ 'Slept in an awkward position', 'New exercise or activity', 'Recently carried heavy bag, purse, or other object using a shoulder strap', 'Pain worsens with lateral movement', 'History of prolonged sitting at a computer terminal or work station', 'Intermittent pain and history of prior neck problems' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [ 'Apply heat to neck for 20 minutes every 2 hours. Be careful with heat if diabetic. Do not sleep on a heating pad.', 'Sleep with a towel folded around neck to lessen neck movement.', 'Carry purse or briefcase under arm, rather than over the shoulder.', 'Avoid prolonged sitting. Frequently stretch and move around.', 'Exercise regularly to develop strong neck muscles.', 'Soak in hot bath or whirlpool.', 'Take usual pain medication (aspirin, acetaminophen, ibuprofen) as directed by your physician. Do not give aspirin to a child. Avoid aspirinlike products if age < 20 years. Avoid acetaminophen if liver disease is present. Avoid ibuprofen if kidney disease or stomach problems exist or in the case of pregnancy. Follow the directions on the label.', 'Maintain good posture and proper body align ' ],
        reportToPCP: [ 'Rash, fever, or increased pain bending neck forward', 'No improvement or condition worsens' ],
        seekEmergencyCare: [ 'Chest pain', 'Difficulty breathing', 'Numbness, tingling, or weakness in both arms or legs', 'Severe headache and confusion', 'Sweating, palpitations, nausea, and/or vomiting', 'Swelling to one side of the neck with pain on palpation with or without fever', 'Loss of bowel or bladder control', 'Pain worsens when head is bent toward chest, confusion/drowsiness, severe headache, light sensitivity, fever, purple or blood-colored rash' ]
      },
  },
  'Chest/Cardiovascular Problems': {
      'Bleeding, Severe': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Chest Pain': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Chest Pain: Causes and Characteristics (Appendix S)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Chest Trauma': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Heartburn': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Heart Rate Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hypertension': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hypotension': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shock, Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Respiratory Problems': {
      'Allergic Reaction': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Asthma': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Breathing Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Choking': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Common Cold Symptoms': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Congestion': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Congestive Heart Failure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Cough': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Croup': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Drowning (Near Drowning)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Facial Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Inhaled': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hay Fever Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hoarseness': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hyperventilation': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Influenza': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sleep Apnea, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sleep Apnea, Infant': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Wheezing': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Gastrointestinal Problems': {
      'Abdominal Pain, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Abdominal Pain, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Abdominal Pain: Causes and Characteristics (Appendix R)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Appetite Loss, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Appetite Loss, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Constipation': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diarrhea, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diarrhea, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Feeding Tube Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Food Allergy, Known or Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Food Poisoning, Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Rectum': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Swallowing of': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Gas/Belching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Gas/Flatulence': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Heartburn': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hemorrhoids': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hiccups': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Incontinence, Stool': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Indigestion': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ostomy Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pinworms': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rectal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rectal Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Stools, Abnormal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vomiting, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vomiting, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Genital/Obstetrics and Gynecological Problems': {
      'Breast-Feeding Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Breast Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Contraception, Emergency (EC)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Vagina': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Genital Lesions': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Genital Problems, Male': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Menstrual Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Postpartum Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Cold Symptoms': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Fetal Movement Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Hypertension': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Leaking Vaginal Fluid': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Nausea and Vomiting': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Suspected Labor': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Suspected Labor < 36 Weeks': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Urination Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pregnancy, Vaginal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scrotal Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexual Assault': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vaginal Bleeding': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Vaginal Discharge/Pain/Itching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Urination Problems': {
      'Bed-Wetting': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Incontinence, Urine': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urinary Catheter/Nephrostomy Tube Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Difficult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Excessive': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urination, Painful': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Urine, Abnormal Color': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Limb (Arm/Leg) Problems': {
      'Ankle Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ankle Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Arm or Hand Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bone, Joint, and Tissue Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Cast/Splint Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Extremity Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Finger and Toe Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foot Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hand/Wrist Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hip Pain/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Joint Pain/Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Knee Pain/Swelling/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Leg Pain/Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Muscle Cramps': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shoulder Pain/Injury': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Skin Problems': {
      'Abrasions': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Allergic Reaction': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bedbug Exposure or Concerns': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bee Stings': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Animal/Human': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Insect': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Marine Animal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Snake': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bites, Tick': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Bruising': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Chemical': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Electrical': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Burns, Thermal': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diaper Rash': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Facial Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Facial Skin Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Foreign Body, Skin': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Frostbite': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Glands, Swollen or Tender': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hair Loss': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hives': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Itching': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Jaundice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Laceration': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Lice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Piercing/Pocketing Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Puncture Wound': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rash, Adult': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rash, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scabies': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shingles: Suspected or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Skin Lesions: Lumps, Bumps, and Sores': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sunburn': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sweating, Excessive': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Swelling': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Tattoo Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Wound Care: Sutures or Staples': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Wound Healing and Infection': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Chronic and Infectious Diseases': {
      'Asthma': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Avian Influenza (“Bird Flu”) Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Blood/Body Fluid Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Chickenpox': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Communicable Diseases (Appendix M)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Congestive Heart Failure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Diabetes Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Ebola: Known or Suspected Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hepatitis': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'HIV Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Hospice Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Impetigo': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Influenza': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Lice': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Mumps': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Pertussis (Whooping Cough)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Reye Syndrome, Suspected': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Roseola': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rubella (German Measles)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Rubeola (Measles)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Scabies': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Severe Acute Respiratory Syndrome (SARS)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sexually Transmitted Disease (STD) (Appendix N)': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Sickle Cell Disease Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Shingles: Suspected or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Swine Flu (H1N1 Virus) Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'West Nile Virus': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'Behavioral Health Problems': {
      'Alcohol Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Anxiety': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Child Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Depression': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Domestic Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Overdose': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Substance Abuse, Use, or Exposure': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
      'Suicide Attempt, Threat': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  },
  'General Problems': {
    'Cold Exposure Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Dehydration': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Electric Injury': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Falls': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fatigue': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fever, Adult': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Fever, Child': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Food Allergy, Known or Suspected': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Heat Exposure Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Immunization, Tetanus': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Immunization Reactions': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Postoperative Problems': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Weakness': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
  },
  'Pediatric-Specific Problems': {
    'Abdominal Pain, Child': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Bed-Wetting': {
      keyQuestions: [ '' ],
      otherProtocolstoConsider: [ '' ],
      nurseAlert: '',
      alertBullets: [ '' ],
      assessment: [
        {
          A: '',
          list: [ '' ],
          true: 'Seek emergency care now'
        },
        {
          B: '',
          list: [ '' ],
          true: 'Seek medical care within 2 to 4 hours'
        },
        {
          C: '',
          list: [ '' ],
          true: 'Seek medical care within 24 hours'
        },
        {
          D: '',
          list: [ '' ],
          true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
        }
      ],
      homeCareInstructions: [],
      reportToPCP: [ '' ],
      seekEmergencyCare: [ '' ]
    },
    'Chickenpox': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Child Abuse': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Circumcision Care': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Croup': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Crying, Excessive, in Infants': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Diaper Rash': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Diarrhea, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Fever, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Newborn Problems': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Rash, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Roseola': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Seizure, Febrile': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Sleep Apnea, Infant': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Spitting Up, Infant': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Teething': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Umbilical Cord Care': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
    'Vomiting, Child': {
        keyQuestions: [ '' ],
        otherProtocolstoConsider: [ '' ],
        nurseAlert: '',
        alertBullets: [ '' ],
        assessment: [
          {
            A: '',
            list: [ '' ],
            true: 'Seek emergency care now'
          },
          {
            B: '',
            list: [ '' ],
            true: 'Seek medical care within 2 to 4 hours'
          },
          {
            C: '',
            list: [ '' ],
            true: 'Seek medical care within 24 hours'
          },
          {
            D: '',
            list: [ '' ],
            true: 'Call back or call PCP for appointment if no improvement” and Follow Home Care Instructions'
          }
        ],
        homeCareInstructions: [],
        reportToPCP: [ '' ],
        seekEmergencyCare: [ '' ]
      },
  }
};

/* let Appendix = []; */


function createList(items) {
  const list = document.createElement('ul');
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  return list;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function toggleVisibility(element) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function createContent(data) {
  const container = document.getElementById('triage-list');
  for (const heading in data) {
    const headingElement = document.createElement('h2');
    headingElement.textContent = heading;
    headingElement.addEventListener('click', () => {
      toggleVisibility(container.querySelector('h3'));
      toggleVisibility(container.querySelector('p'));
    });
    container.appendChild(headingElement);
    for (const subHeading in data[heading]) {
      const subHeadingElement = document.createElement('h3');
      subHeadingElement.textContent = subHeading;
      subHeadingElement.style.display = 'none'; // Initially hide subheading content
      container.appendChild(subHeadingElement);
      const subData = data[heading][subHeading];
      for (const key in subData) {
        if (Array.isArray(subData[key])) {
          const listElement = createList(subData[key]);
          listElement.style.display = 'none'; // Initially hide list content
          container.appendChild(listElement);
        } else if (typeof subData[key] === 'string') {
          const paragraphElement = createParagraph(subData[key]);
          paragraphElement.style.display = 'none'; // Initially hide paragraph content
          container.appendChild(paragraphElement);
        }
      }
    }
  }
}

createContent(bodySystem);