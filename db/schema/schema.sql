DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS users_groups CASCADE;
DROP TABLE IF EXISTS steps CASCADE;
DROP TABLE IF EXISTS milestones CASCADE;
DROP TABLE IF EXISTS goals CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username varchar(20) NOT NULL,
  password varchar(50) NOT NULL,
  email varchar(20) NOT NULL
);

CREATE TABLE groups (
  id serial PRIMARY KEY,
  name varchar(20) NOT NULL,
  description varchar(50)
);

CREATE TABLE users_groups (
  id serial PRIMARY KEY,
  user_id bigint NOT NULL,
  group_id bigint NOT NULL
);

CREATE TABLE steps (
  id serial PRIMARY KEY,
  title varchar(15) NOT NULL,
  description varchar(500),
  checked boolean default false NOT NULL,
  milestone_id bigint REFERENCES milestones (id) ON DELETE CASCADE
);


CREATE TABLE milestones (
  id serial PRIMARY KEY,
  title varchar(10) NOT NULL,
  description varchar(500) NOT NULL,
  checked boolean default false NOT NULL,
  goal_id bigint REFERENCES goals (id) ON DELETE CASCADE
);

CREATE TABLE goals (
  id serial PRIMARY KEY,
  title varchar(10) NOT NULL,
  description varchar(500) NOT NULL,
  due_date date,
  difficulties integer,
    check(difficulties >= 1 and difficulties <= 5),
  checked boolean default false NOT NULL,
  user_id bigint REFERENCES users (id) ON DELETE CASCADE,
  group_id bigint REFERENCES groups (id) ON DELETE CASCADE
);