import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

# Sample investor profiles
investor_profiles = [
    {
        'name': 'Investor 1',
        'investment_goal': 'High growth',
        'business_interest': [ 'Healthcare', 'Technology'],
        'past_experiences': ['Startup founder', 'Venture capital','doctor'],
        'geographical_location': 'USA'
    },
    {
        'name': 'Investor 2',
        'investment_goal': 'Diversification',
        'business_interest': ['Finance', 'Real Estate','Healthcare'],
        'past_experiences': ['Financial analyst', 'Real estate investor'],
        'geographical_location': 'UK'
    },
    # Add more investor profiles
]

# Sample entrepreneur profiles
entrepreneur_profiles = [
    {
        'startup_idea': 'AI-driven healthcare platform',
        'investment_goal': 'Diversification',
        'business_interest': ['Technology','Healthcare' ],
        'past_experiences': ['Data scientist', 'Medical researcher'],
        'geographical_location': 'USA'
    },
    {
        'startup_idea': 'Blockchain-based medical records system',
        'investment_goal': 'low growth',
        'business_interest': ['ha', 'ha'],
        'past_experiences': ['Blockchain developer', 'Healthcare consultant'],
        'geographical_location': 'USA'
    },
    # Add more entrepreneur profiles
]

# Convert profiles to vectors for cosine similarity calculation
def profile_to_vector(profile):
    vector = np.zeros((1, 4))  # 4 features: investment_goal, business_interest, past_experiences, geographical_location
    features = ['investment_goal', 'business_interest', 'past_experiences', 'geographical_location']
    
    # One-hot encode investment_goal
    if profile['investment_goal'] == 'High growth':
        vector[0, 0] = 1
    elif profile['investment_goal'] == 'Diversification':
        vector[0, 1] = 1
    
    # One-hot encode business_interest
    business_interests = profile['business_interest']
    for interest in business_interests:
        if interest == 'Technology':
            vector[0, 2] += 1
        elif interest == 'Healthcare':
            vector[0, 3] += 1
    
    # Count occurrences of past_experiences
    past_experiences = profile['past_experiences']
    vector[0, 3] = len(past_experiences)
    
    # One-hot encode geographical_location

    return vector

    

# Calculate cosine similarity between investor and entrepreneur profiles
similarities = {}
for investor_profile in investor_profiles:
    investor_name = investor_profile['name']
    investor_vector = profile_to_vector(investor_profile)
    similarities[investor_name] = {}
    for entrepreneur_profile in entrepreneur_profiles:
        entrepreneur_name = entrepreneur_profile['startup_idea']
        entrepreneur_vector = profile_to_vector(entrepreneur_profile)
        similarity_score = cosine_similarity(investor_vector, entrepreneur_vector)[0][0]
        similarities[investor_name][entrepreneur_name] = similarity_score

# Display recommendations for each investor
for investor_name, entrepreneur_scores in similarities.items():
    sorted_scores = sorted(entrepreneur_scores.items(), key=lambda x: x[1], reverse=True)
    print(f"Recommendations for {investor_name}:")
    for idea, score in sorted_scores:
        print(f"- {idea}: Similarity Score = {score}")
