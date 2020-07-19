CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public."user" (
    id bigint NOT NULL,
    steam_id text NOT NULL,
    steam_profile text NOT NULL,
    nickname text NOT NULL,
    avatar text NOT NULL,
    lang text NOT NULL,
    role text NOT NULL,
    bot boolean DEFAULT false NOT NULL,
    money bigint DEFAULT 0 NOT NULL,
    CONSTRAINT "Money cant be negative" CHECK ((money >= 0))
);
CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
CREATE TABLE public.user_role (
    value text NOT NULL
);
CREATE VIEW public.view_current_user AS
 SELECT "user".id,
    "user".steam_id,
    "user".steam_profile,
    "user".nickname,
    "user".avatar,
    "user".lang,
    "user".role,
    "user".bot,
    "user".money
   FROM public."user";
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT role_pkey PRIMARY KEY (value);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_steam_id_key UNIQUE (steam_id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_role_fkey FOREIGN KEY (role) REFERENCES public.user_role(value) ON UPDATE RESTRICT ON DELETE RESTRICT;
