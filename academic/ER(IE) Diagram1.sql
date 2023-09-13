-----------------------------------------------------------------
-- File auto generated by WhiteStarUML on 22/05/2023 4:56:40 a. m. --
-----------------------------------------------------------------

CREATE TABLE user(
  id bigInt NOT NULL,
  username charater_varying NOT NULL,
  password charater_varying NOT NULL,
  first_name charater_varying NOT NULL,
  last_name charater_varying NOT NULL,
  gender charater_varying NOT NULL,
  rol_id  NOT NULL,
  contact_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE Contact(
  id bitInt NOT NULL,
  email  NOT NULL,
  cell_phone  NOT NULL,
  user_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE student(
  id bigint NOT NULL,
  user_id  NOT NULL,
  id_career  NOT NULL,
  id_campus  NOT NULL,
  semester_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE career(
  id bigint NOT NULL,
  nombre  NOT NULL,
  department_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE Campus(
  id bigint NOT NULL,
  city  NOT NULL,
  departament_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE departament(
  id smallint NOT NULL,
  name  NOT NULL,
  Primary Key (id)
);

CREATE TABLE departamen_faculty(
  id bigint NOT NULL,
  name  NOT NULL,
  id_faculty  NOT NULL,
  Primary Key (id)
);

CREATE TABLE faculty(
  id bigint NOT NULL,
  name  NOT NULL,
  Primary Key (id)
);

CREATE TABLE pensum(
  id bigint NOT NULL,
  name  NOT NULL,
  career_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE subjects(
  id bigint NOT NULL,
  name  NOT NULL,
  departamen_faculty_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE Program(
  id smallint NOT NULL,
  name  NOT NULL,
  departamen_faculty_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE plan(
  id bigint NOT NULL,
  semester_id  NOT NULL,
  pensum_id  NOT NULL,
  subjects_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE programming(
  id bigint NOT NULL,
  teacher_id  NOT NULL,
  offer_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE teacher(
  id bigint NOT NULL,
  user_id  NOT NULL,
  departament_id  NOT NULL,
  type_teacher_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE rolle(
  id smallint NOT NULL,
  name  NOT NULL,
  Primary Key (id)
);

CREATE TABLE schedule(
  id bigint NOT NULL,
  hour_start  NOT NULL,
  hour_end  NOT NULL,
  date  NOT NULL,
  programming_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE type_teacher(
  id bigint NOT NULL,
  description  NOT NULL,
  Primary Key (id)
);

CREATE TABLE Calendar(
  id bigInt NOT NULL,
  name  NOT NULL,
  Primary Key (id)
);

CREATE TABLE enrolled(
  id bigInt NOT NULL,
  estudent_id  NOT NULL,
  offert_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE offer(
  id bigint NOT NULL,
  plan_id  NOT NULL,
  calendar_id  NOT NULL,
  campus_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE academy(
  id bigint NOT NULL,
  user_id  NOT NULL,
  type_academy_id  NOT NULL,
  description  NOT NULL,
  Primary Key (id)
);

CREATE TABLE type_academy(
  id bigint NOT NULL,
  type  NOT NULL,
  Primary Key (id)
);

CREATE TABLE note(
  id bigint NOT NULL,
  enrolled_id  NOT NULL,
  themes_id  NOT NULL,
  value  NOT NULL,
  Primary Key (id)
);

CREATE TABLE themes(
  id bigint NOT NULL,
  theme_id  NOT NULL,
  type_evaluation_id  NOT NULL,
  porcentage  NOT NULL,
  Primary Key (id)
);

CREATE TABLE theme(
  id bigint NOT NULL,
  name  NOT NULL,
  subjects_id  NOT NULL,
  Primary Key (id)
);

CREATE TABLE type_evaluation(
  id bigint NOT NULL,
  name  NOT NULL,
  Primary Key (id)
);

CREATE TABLE semester(
  id smallint NOT NULL,
  number  NOT NULL,
  Primary Key (id)
);

ALTER TABLE user Add Foreign Key (rol_id) References ();
ALTER TABLE user Add Foreign Key (contact_id) References ();
ALTER TABLE Contact Add Foreign Key (user_id) References ();
ALTER TABLE student Add Foreign Key (user_id) References ();
ALTER TABLE student Add Foreign Key (id_career) References ();
ALTER TABLE student Add Foreign Key (id_campus) References ();
ALTER TABLE student Add Foreign Key (semester_id) References ();
ALTER TABLE career Add Foreign Key (department_id) References ();
ALTER TABLE Campus Add Foreign Key (departament_id) References ();
ALTER TABLE departamen_faculty Add Foreign Key (id_faculty) References ();
ALTER TABLE pensum Add Foreign Key (career_id) References ();
ALTER TABLE subjects Add Foreign Key (departamen_faculty_id) References ();
ALTER TABLE Program Add Foreign Key (departamen_faculty_id) References ();
ALTER TABLE plan Add Foreign Key (semester_id) References ();
ALTER TABLE plan Add Foreign Key (pensum_id) References ();
ALTER TABLE plan Add Foreign Key (subjects_id) References ();
ALTER TABLE programming Add Foreign Key (teacher_id) References ();
ALTER TABLE programming Add Foreign Key (offer_id) References ();
ALTER TABLE teacher Add Foreign Key (departament_id) References ();
ALTER TABLE teacher Add Foreign Key (type_teacher_id) References ();
ALTER TABLE schedule Add Foreign Key (programming_id) References ();
ALTER TABLE enrolled Add Foreign Key (estudent_id) References ();
ALTER TABLE enrolled Add Foreign Key (offert_id) References ();
ALTER TABLE offer Add Foreign Key (plan_id) References ();
ALTER TABLE offer Add Foreign Key (calendar_id) References ();
ALTER TABLE offer Add Foreign Key (campus_id) References ();
ALTER TABLE academy Add Foreign Key (user_id) References ();
ALTER TABLE academy Add Foreign Key (type_academy_id) References ();
ALTER TABLE note Add Foreign Key (enrolled_id) References ();
ALTER TABLE note Add Foreign Key (themes_id) References ();
ALTER TABLE themes Add Foreign Key (theme_id) References ();
ALTER TABLE themes Add Foreign Key (type_evaluation_id) References ();
ALTER TABLE theme Add Foreign Key (subjects_id) References ();