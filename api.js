// Global Supabase Configuration
const SUPABASE_URL = 'https://nijdkozxpxdoknwqvjcq.supabase.co'; // Replace with your Supabase URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pamRrb3p4cHhkb2tud3F2amNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5MDE3MzcsImV4cCI6MjEwMjQ3NzczN30.Gr94fDp2OE2L-H3JnH9kPVRnAU0AjMA9tKqfdxHGYf8'; // Replace with your anon key

// Initialize Supabase Client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ===== NEWSLETTER API =====
async function addToNewsletter(email) {
  try {
    const { data, error } = await supabaseClient
      .from('newsletter')
      .insert([{ email: email }]);
    
    if (error) throw error;
    return { success: true, message: 'Successfully subscribed!' };
  } catch (error) {
    console.error('Newsletter error:', error);
    return { success: false, message: error.message };
  }
}

// ===== CHALLENGE SIGNUP API =====
async function submitChallengeSignup(name, email, company, aiModel) {
  try {
    const { data, error } = await supabaseClient
      .from('challenge_signup')
      .insert([
        {
          name: name,
          email: email,
          company: company,
          ai_model: aiModel
        }
      ]);
    
    if (error) throw error;
    return { success: true, message: 'Challenge application submitted! We\'ll be in touch soon.' };
  } catch (error) {
    console.error('Challenge signup error:', error);
    return { success: false, message: error.message };
  }
}

// ===== CONTACT INQUIRY API =====
async function submitContactInquiry(name, email, message) {
  try {
    const { data, error } = await supabaseClient
      .from('contact_inquiry')
      .insert([
        {
          name: name,
          email: email,
          message: message
        }
      ]);
    
    if (error) throw error;
    return { success: true, message: 'Message received! We\'ll respond within 24 hours.' };
  } catch (error) {
    console.error('Contact inquiry error:', error);
    return { success: false, message: error.message };
  }
}

// ===== FIRST CLIENT APPLY API =====
async function submitFirstClientApplication(name, email, company, aiSystem) {
  try {
    const { data, error } = await supabaseClient
      .from('first_client_apply')
      .insert([
        {
          name: name,
          email: email,
          company: company,
          ai_system: aiSystem
        }
      ]);
    
    if (error) throw error;
    return { success: true, message: 'Application received! We\'ll contact you within 24 hours.' };
  } catch (error) {
    console.error('First client apply error:', error);
    return { success: false, message: error.message };
  }
}