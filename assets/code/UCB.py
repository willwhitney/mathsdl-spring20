class UCB(object):
    
    def __init__(self, k, beta):
        
        self.k = k
        self.means = np.zeros(k)
        self.sums = np.zeros(k)
        self.counts = np.zeros(k)
        self.ucbs = np.zeros(k)
        
        self.beta = beta
        self.T = 0
        
        
    def select(self):
        if self.T < self.k:
            return self.T
     
        arm = np.argmax(self.ucbs)
        return int(arm)
        
    def update(self, arm, reward):
        self.T += 1
        self.counts[arm] += 1
        self.sums[arm] += reward
        self.means[arm] = self.sums[arm] / self.counts[arm]
        
        if self.T >= self.k:
            for i in range(self.k):
                self.ucbs[i] = self.means[i] + self.beta * np.sqrt(2*np.log(self.T) / self.counts[i])
        return 