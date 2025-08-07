import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1754568236434 implements MigrationInterface {
    name = 'Init1754568236434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "region" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "region_name" character varying NOT NULL, "established_year" integer NOT NULL, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "academic_department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "department_name" character varying NOT NULL, "campus_id" uuid, CONSTRAINT "PK_959f6fc92d7f67363c88781faf4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campus" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "campus_name" character varying NOT NULL, "established_year" integer NOT NULL, "university_id" uuid, CONSTRAINT "PK_150aa1747b3517c47f9bd98ea6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "university" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "university_name" character varying NOT NULL, "established_year" integer NOT NULL, CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "church_roles" ("id" SERIAL NOT NULL, "role_name" character varying NOT NULL, CONSTRAINT "PK_bd0f8e50090212edc2bf3bfd3bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "role" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "last_login_at" TIMESTAMP, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "church_family_numbers" ("id" SERIAL NOT NULL, "family_number" character varying NOT NULL, "family_name" character varying NOT NULL, "is_father" boolean NOT NULL DEFAULT false, "is_mother" boolean NOT NULL DEFAULT false, "studentStudentId" uuid NOT NULL, CONSTRAINT "PK_32f0b62b021efed06a67f22e4f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "priesthood" ("id" SERIAL NOT NULL, "priesthood_type" character varying NOT NULL, "ordination_date" date NOT NULL, "studentStudentId" uuid NOT NULL, CONSTRAINT "PK_f7e5c339599f54d96476ad75554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("student_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "father_name" character varying NOT NULL, "grandfather_name" character varying NOT NULL, "mother_name" character varying NOT NULL, "gender" character varying NOT NULL, "baptism_name" character varying NOT NULL, "date_of_birth" date NOT NULL, "current_dorm" character varying NOT NULL, "phone_number" character varying NOT NULL, "email" character varying NOT NULL, "family_contact_name" character varying NOT NULL, "family_contact_phone" character varying NOT NULL, "emergency_contact_name" character varying NOT NULL, "emergency_contact_phone" character varying NOT NULL, "student_id_number" character varying NOT NULL, "current_year_of_study" integer NOT NULL, "is_current_student" boolean NOT NULL, "graduated_year" integer, "profile_image_url" character varying, "registered_date" date NOT NULL, "last_updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "birth_woreda_id" uuid, "university_id" uuid, "campus_id" uuid, "academic_department_id" uuid, "current_church_role_id" integer, CONSTRAINT "REL_0cc43638ebcf41dfab27e62dc0" UNIQUE ("user_id"), CONSTRAINT "PK_be3689991c2cc4b6f4cf39087fa" PRIMARY KEY ("student_id"))`);
        await queryRunner.query(`CREATE TABLE "sunday_school_service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "class_served_in" character varying NOT NULL, "service_start_year" integer NOT NULL, "service_end_year" integer, "is_currently_serving" boolean NOT NULL DEFAULT false, "student_id" uuid, "sunday_school_id" uuid, CONSTRAINT "PK_24dc54eb207a829a7b9a4741781" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sunday_school" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "church_name" character varying NOT NULL, "specific_address" character varying NOT NULL, "woreda_id" uuid, CONSTRAINT "PK_dece6bfe88258a0435cbf605122" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "woreda" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "woreda_name" character varying NOT NULL, "established_year" integer NOT NULL, "zone_id" uuid, CONSTRAINT "PK_64f135577f1e5f19e079dabccdb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "zone" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "zone_name" character varying NOT NULL, "region_id" uuid, CONSTRAINT "PK_bd3989e5a3c3fb5ed546dfaf832" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_training" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "training_name" character varying NOT NULL, "specific_details" character varying, "training_year" integer NOT NULL, "student_id" uuid, "training_id" uuid, CONSTRAINT "PK_83b67d8d70d8f6f24a0f0664ce5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "training" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "training_name" character varying NOT NULL, "training_category" character varying NOT NULL, "starting_year" integer NOT NULL, "end_year" integer NOT NULL, CONSTRAINT "PK_c436c96be3adf1aa439ef471427" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service_area" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "area_name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_9daeb85378e2c59f1d2e68665cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "service_start_year" integer NOT NULL, "service_end_year" integer, "is_currently_serving" boolean NOT NULL DEFAULT false, "student_id" uuid, "service_area_id" uuid, CONSTRAINT "PK_b88c893a967335f0b2d9253340f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "instrument" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "instrument_name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_1707dc7e7c2845211b38bef3d29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_instrument" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "proficiency_level" character varying NOT NULL, "description" character varying, "student_id" uuid, "instrument_id" uuid, CONSTRAINT "PK_be492fe3ea6b711d0192cb59cb8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "confessor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL, "title" character varying NOT NULL, "church_name" character varying NOT NULL, CONSTRAINT "PK_a4b16bb52cab45d71c427580567" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_confessor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "confession_start_year" integer NOT NULL, "confession_end_year" integer, "is_current_confessor" boolean NOT NULL DEFAULT false, "student_id" uuid, "confessor_id" uuid, CONSTRAINT "PK_7a67205d6c93f5a7cfdab689e39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "academic_department" ADD CONSTRAINT "FK_c181e704018e58cace8cf5e5386" FOREIGN KEY ("campus_id") REFERENCES "campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campus" ADD CONSTRAINT "FK_5cf3701abe6d6ac2178e5f52108" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "church_family_numbers" ADD CONSTRAINT "FK_6488b149a509d8fb05804872b1c" FOREIGN KEY ("studentStudentId") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "priesthood" ADD CONSTRAINT "FK_6e6ae5ae5779dc1e582a46dc671" FOREIGN KEY ("studentStudentId") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09" FOREIGN KEY ("user_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_da2ce4ded76c517477764836bd2" FOREIGN KEY ("birth_woreda_id") REFERENCES "woreda"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_8ff902d7cd1e9b9b5d76944dfd8" FOREIGN KEY ("university_id") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_b4b0782708f92ec26124b7f54e4" FOREIGN KEY ("campus_id") REFERENCES "campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_24956711ff7f3ddd65b165ff610" FOREIGN KEY ("academic_department_id") REFERENCES "academic_department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_82b16a30a741234af15d3fe81a0" FOREIGN KEY ("current_church_role_id") REFERENCES "church_roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sunday_school_service" ADD CONSTRAINT "FK_fcf326f6720ee830ee14ca6f0cf" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sunday_school_service" ADD CONSTRAINT "FK_6e3385e279614e50e1cad2b814e" FOREIGN KEY ("sunday_school_id") REFERENCES "sunday_school"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sunday_school" ADD CONSTRAINT "FK_43b66a41e38ef70fa69f162aa26" FOREIGN KEY ("woreda_id") REFERENCES "woreda"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "woreda" ADD CONSTRAINT "FK_cbc99c1032327a745a1bafb7cd7" FOREIGN KEY ("zone_id") REFERENCES "zone"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "zone" ADD CONSTRAINT "FK_689193f6148365d1a4f03dc6815" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_training" ADD CONSTRAINT "FK_6844d1eef9d5bf570fb90a12388" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_training" ADD CONSTRAINT "FK_8c89fbd16292f02712fe466e387" FOREIGN KEY ("training_id") REFERENCES "training"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_service" ADD CONSTRAINT "FK_84e1cc91c8c6671eb7821bb50d1" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_service" ADD CONSTRAINT "FK_d23fe61f25aa294307001cd5be9" FOREIGN KEY ("service_area_id") REFERENCES "service_area"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_instrument" ADD CONSTRAINT "FK_bd9f66e4f6888311a482508091e" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_instrument" ADD CONSTRAINT "FK_047310b83ca5c4e5d2c4e14c546" FOREIGN KEY ("instrument_id") REFERENCES "instrument"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_confessor" ADD CONSTRAINT "FK_774dcdbc18e3feb1ab1d6258167" FOREIGN KEY ("student_id") REFERENCES "student"("student_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_confessor" ADD CONSTRAINT "FK_36091ce0b9003f0cfe54895c3de" FOREIGN KEY ("confessor_id") REFERENCES "confessor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_confessor" DROP CONSTRAINT "FK_36091ce0b9003f0cfe54895c3de"`);
        await queryRunner.query(`ALTER TABLE "student_confessor" DROP CONSTRAINT "FK_774dcdbc18e3feb1ab1d6258167"`);
        await queryRunner.query(`ALTER TABLE "student_instrument" DROP CONSTRAINT "FK_047310b83ca5c4e5d2c4e14c546"`);
        await queryRunner.query(`ALTER TABLE "student_instrument" DROP CONSTRAINT "FK_bd9f66e4f6888311a482508091e"`);
        await queryRunner.query(`ALTER TABLE "student_service" DROP CONSTRAINT "FK_d23fe61f25aa294307001cd5be9"`);
        await queryRunner.query(`ALTER TABLE "student_service" DROP CONSTRAINT "FK_84e1cc91c8c6671eb7821bb50d1"`);
        await queryRunner.query(`ALTER TABLE "student_training" DROP CONSTRAINT "FK_8c89fbd16292f02712fe466e387"`);
        await queryRunner.query(`ALTER TABLE "student_training" DROP CONSTRAINT "FK_6844d1eef9d5bf570fb90a12388"`);
        await queryRunner.query(`ALTER TABLE "zone" DROP CONSTRAINT "FK_689193f6148365d1a4f03dc6815"`);
        await queryRunner.query(`ALTER TABLE "woreda" DROP CONSTRAINT "FK_cbc99c1032327a745a1bafb7cd7"`);
        await queryRunner.query(`ALTER TABLE "sunday_school" DROP CONSTRAINT "FK_43b66a41e38ef70fa69f162aa26"`);
        await queryRunner.query(`ALTER TABLE "sunday_school_service" DROP CONSTRAINT "FK_6e3385e279614e50e1cad2b814e"`);
        await queryRunner.query(`ALTER TABLE "sunday_school_service" DROP CONSTRAINT "FK_fcf326f6720ee830ee14ca6f0cf"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_82b16a30a741234af15d3fe81a0"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_24956711ff7f3ddd65b165ff610"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_b4b0782708f92ec26124b7f54e4"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_8ff902d7cd1e9b9b5d76944dfd8"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_da2ce4ded76c517477764836bd2"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_0cc43638ebcf41dfab27e62dc09"`);
        await queryRunner.query(`ALTER TABLE "priesthood" DROP CONSTRAINT "FK_6e6ae5ae5779dc1e582a46dc671"`);
        await queryRunner.query(`ALTER TABLE "church_family_numbers" DROP CONSTRAINT "FK_6488b149a509d8fb05804872b1c"`);
        await queryRunner.query(`ALTER TABLE "campus" DROP CONSTRAINT "FK_5cf3701abe6d6ac2178e5f52108"`);
        await queryRunner.query(`ALTER TABLE "academic_department" DROP CONSTRAINT "FK_c181e704018e58cace8cf5e5386"`);
        await queryRunner.query(`DROP TABLE "student_confessor"`);
        await queryRunner.query(`DROP TABLE "confessor"`);
        await queryRunner.query(`DROP TABLE "student_instrument"`);
        await queryRunner.query(`DROP TABLE "instrument"`);
        await queryRunner.query(`DROP TABLE "student_service"`);
        await queryRunner.query(`DROP TABLE "service_area"`);
        await queryRunner.query(`DROP TABLE "training"`);
        await queryRunner.query(`DROP TABLE "student_training"`);
        await queryRunner.query(`DROP TABLE "zone"`);
        await queryRunner.query(`DROP TABLE "woreda"`);
        await queryRunner.query(`DROP TABLE "sunday_school"`);
        await queryRunner.query(`DROP TABLE "sunday_school_service"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "priesthood"`);
        await queryRunner.query(`DROP TABLE "church_family_numbers"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "church_roles"`);
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "campus"`);
        await queryRunner.query(`DROP TABLE "academic_department"`);
        await queryRunner.query(`DROP TABLE "region"`);
    }

}
