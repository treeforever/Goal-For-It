DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS users_groups CASCADE;
DROP TABLE IF EXISTS steps CASCADE;
DROP TABLE IF EXISTS milestones CASCADE;
DROP TABLE IF EXISTS goals CASCADE;

CREATE TABLE users (
  user_id bigserial PRIMARY KEY,
  username varchar(20) NOT NULL,
  password varchar(50) NOT NULL,
  email varchar(20) NOT NULL
);

CREATE TABLE groups (
  group_id bigserial PRIMARY KEY,
  name varchar(20) NOT NULL,
  admin_url text NOT NULL,
  poll_url text NOT NULL,
  user_id bigint REFERENCES users (user_id) ON DELETE CASCADE
);

CREATE TABLE choices (
  choice_id bigserial PRIMARY KEY,
  choice_name varchar(100) NOT NULL,
  description text,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE
);

CREATE TABLE votes_by_array (
  vote_id bigserial PRIMARY KEY,
  preferences bigint[] NOT NULL,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE
);

-- votes_by_array stores choice_ids in the preference array
-- votes_by_vote just stores choice_ids alongside vote value

CREATE TABLE votes_by_vote (
  vote_id bigserial PRIMARY KEY,
  vote_value integer NOT NULL,
  question_id bigint REFERENCES questions (question_id) ON DELETE CASCADE,
  choice_id bigint REFERENCES choices (choice_id) ON DELETE CASCADE
);

CREATE TABLE session (
  session_id text PRIMARY KEY NOT DEFERRABLE INITIALLY IMMEDIATE COLLATE "default",
  expire timestamp(6) NOT NULL,
  user_id bigint REFERENCES users (user_id) ON DELETE CASCADE
) WITH (OIDS=FALSE);