DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS users_groups CASCADE;
DROP TABLE IF EXISTS steps CASCADE;
DROP TABLE IF EXISTS milestones CASCADE;
DROP TABLE IF EXISTS goals CASCADE;
DROP TABLE IF EXISTS notices CASCADE;


CREATE TABLE users (
  user_id serial PRIMARY KEY,
  username varchar(20) NOT NULL,
  password varchar(50) NOT NULL,
  email varchar(20) NOT NULL,
  user_money decimal,
  group_money decimal,
  group_id bigint
);

CREATE TABLE groups (
  group_id serial PRIMARY KEY,
  name varchar(20) NOT NULL,
  description varchar(50)
);

CREATE TABLE users_groups (
  id serial PRIMARY KEY,
  user_id bigint,
  group_id bigint
);


CREATE TABLE goals (
  goal_id serial PRIMARY KEY,
  goal varchar(50) NOT NULL,
  goal_description varchar(500) NOT NULL,
  due_date date,
  difficulties integer,
    check(difficulties >= 1 and difficulties <= 5),
  checked boolean default false NOT NULL,
  creator_id bigint,
  group_id bigint
);


CREATE TABLE milestones (
  milestone_id serial PRIMARY KEY,
  mile_title varchar(50) NOT NULL,
  mile_description varchar(500) NOT NULL,
  checked boolean default false NOT NULL,
  goal_id bigint
);

CREATE TABLE steps (
  step_id serial PRIMARY KEY,
  step varchar(500) NOT NULL,
  checked boolean default false NOT NULL,
  milestone_id bigint
);

CREATE TABLE notices (
  notice_id serial PRIMARY KEY,
  type varchar(50) NOT NULL,
  content varchar (500) NOT NULL,
  sender_id bigint,
  receiver_id bigint
);

CREATE TABLE money (
  money_id serial PRIMARY KEY,
  amount decimal NOT NULL,
  group_id bigint
);
