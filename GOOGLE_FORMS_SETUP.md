# Google Forms Setup for CityRewards.fun Waitlist

## 📝 Step-by-Step Instructions

### 1. Create Your Google Form
1. Go to [forms.google.com](https://forms.google.com)
2. Click "Blank" to create a new form
3. Title it: "CityRewards.fun Waitlist"

### 2. Add Form Questions
Add these questions in this exact order:

**Question 1: Email Address**
- Type: Short answer
- Question: "Email Address"
- Required: ✅ Yes

**Question 2: Your City**
- Type: Short answer  
- Question: "Your City"
- Required: ✅ Yes

**Question 3: What interests you most?**
- Type: Multiple choice
- Question: "What interests you most? (Optional)"
- Required: ❌ No
- Options:
  - Sustainability & Environment
  - Community Building
  - Supporting Local Business
  - Volunteering
  - Earning Rewards

### 3. Get Your Form URL
1. Click "Send" button (top right)
2. Click the "Link" tab
3. Copy the URL (it looks like: `https://docs.google.com/forms/d/e/1ABC.../viewform`)

### 4. Update the Website
1. Open `index.html` in a text editor
2. Find this line:
   ```html
   <form id="waitlistForm" class="waitlist-form" action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank">
   ```
3. Replace `YOUR_GOOGLE_FORM_URL` with your actual Google Form URL
4. Save the file

### 5. Test the Integration
1. Open the website
2. Click "Start Contributing"
3. Fill out the form and submit
4. Check your Google Form responses to confirm it's working

## 📊 Viewing Responses

- Go to your Google Form
- Click "Responses" tab
- View responses in real-time
- Export to Google Sheets for analysis
- Set up email notifications for new responses

## 🔧 Troubleshooting

**If the form doesn't submit:**
- Make sure you copied the correct Google Form URL
- Check that the form questions match exactly
- Verify the form is published (not in draft mode)

**If you see "Google Form URL not configured" error:**
- You forgot to replace `YOUR_GOOGLE_FORM_URL` with the actual URL

## 📈 Benefits of Google Forms

- ✅ **Free** - No cost
- ✅ **Real-time** - See responses immediately  
- ✅ **Exportable** - Download as CSV or connect to Google Sheets
- ✅ **Reliable** - Google's infrastructure
- ✅ **No backend needed** - Works with static websites
- ✅ **Email notifications** - Get notified of new signups
- ✅ **Analytics** - Built-in response analytics

## 🎯 Next Steps

Once set up, you can:
1. Monitor signups in real-time
2. Export data for email marketing
3. Analyze which cities have the most interest
4. Set up automated email sequences
5. Track conversion rates and engagement
