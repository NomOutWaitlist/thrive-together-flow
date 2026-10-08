CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 30),
  preferred_contact text NOT NULL CHECK (preferred_contact IN ('phone', 'email')),
  primary_concern text NOT NULL CHECK (char_length(primary_concern) <= 100),
  concern_duration text NOT NULL CHECK (char_length(concern_duration) <= 60),
  impact_level integer NOT NULL CHECK (impact_level BETWEEN 1 AND 5),
  service_interest text NOT NULL CHECK (char_length(service_interest) <= 100),
  preferred_day text NOT NULL CHECK (char_length(preferred_day) <= 60),
  preferred_time text NOT NULL CHECK (char_length(preferred_time) <= 60),
  notes text NOT NULL DEFAULT '' CHECK (char_length(notes) <= 1000),
  consent boolean NOT NULL CHECK (consent = true),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'scheduled', 'closed'))
);
GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) <= 255),
  phone text NOT NULL DEFAULT '' CHECK (char_length(phone) <= 30),
  subject text NOT NULL CHECK (char_length(subject) <= 100),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1000),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.referral_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  referrer_name text NOT NULL CHECK (char_length(referrer_name) BETWEEN 2 AND 100),
  referrer_contact text NOT NULL CHECK (char_length(referrer_contact) BETWEEN 5 AND 255),
  friend_name text NOT NULL CHECK (char_length(friend_name) BETWEEN 2 AND 100),
  friend_contact text NOT NULL CHECK (char_length(friend_contact) BETWEEN 5 AND 255),
  consent boolean NOT NULL CHECK (consent = true),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);
GRANT ALL ON public.referral_submissions TO service_role;
ALTER TABLE public.referral_submissions ENABLE ROW LEVEL SECURITY;

CREATE INDEX booking_requests_created_at_idx ON public.booking_requests (created_at DESC);
CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions (created_at DESC);
CREATE INDEX referral_submissions_created_at_idx ON public.referral_submissions (created_at DESC);